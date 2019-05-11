const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const generate = require("../modules/generator");

mongoose.connect(`${process.env.MONGO_URL}newsletter?retryWrites=true`);

const db = mongoose.connection;

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  email: {
    type: String
  },
  password: { type: String },
  token: { type: String },
  authedDate: { type: Date }
});

const User = (module.exports = mongoose.model("User", UserSchema));

module.exports.signOff = (user, callback) => {
  console.log("siging off");
  console.log(user);
  User.findOne({ email: user.email, token: user.token }).then(userAuth => {
    console.log(userAuth);
    User.updateOne({ _id: userAuth._id }, { token: "", authedDate: "" }).then(
      data => {
        console.log("updated user");
        console.log(data);
        if (data.nModified === 1) {
          callback({ status: true }, data);
        } else {
          callback("error", data);
        }
      }
    );
  });
};
// check if token valid
module.exports.checkToken = (user, callback) => {
  console.log("finding by token");
  console.log(user);
  User.findOne({ email: user.email, token: user.token }, (err, response) => {
    console.log("findOne");
    console.log(response);
    if (response) {
      const mailCheck = response.email === user.email;
      const tokenCheck = response.token === user.token;
      const today = new Date();
      const authedHours = Math.round((today - response.authedDate) / 3600000);
      if (response && mailCheck && tokenCheck && authedHours < 7) {
        console.log("authed - true");
        callback({ authed: true });
      } else {
        callback({ authed: false });
      }
    } else {
      callback({ authed: false });
    }
  });
};
module.exports.findByToken = (token, callback) => {
  console.log("finding by token");
  console.log(token);
  User.findOne({ token: token }, (err, response) => {
    if (response) {
      callback(response._id);
    } else {
      callback({ authed: false });
    }
  });
};

module.exports.check = (fields, callback) => {
  User.findOne({ email: fields.email }, (err, emailResp) => {
    if (err) {
      callback(err);
    } else {
      if (emailResp) {
        callback({ user: "exist" });
      } else {
        callback({ user: "new" });
      }
    }
  });
};
module.exports.create = (fields, callback) => {
  const newSource = new User(fields);
  newSource.save(callback);
};

module.exports.auth = (fields, callback) => {
  console.log("try to auth with:");
  console.log(fields);
  User.findOne({ email: fields.email, password: fields.password }).then(
    userAuth => {
      console.log("- found:");
      console.log(userAuth);
      if (userAuth) {
        const timestamp = new Date();
        // const token = "345abc";
        // console.log("- this is token");

        // bcrypt
        //   .hash(myPlaintextPassword, saltRounds)
        //   .then(function(hash) {
        //     // Store hash in your password DB.
        //   });
        // Load hash from your password DB.
        // bcrypt.compare(myPlaintextPassword, hash).then(function(res) {
        //   // res == true
        // });
        generate.Token("", token => {
          console.log("- generated token:");
          console.log(token);
          User.updateOne(
            { _id: userAuth._id },
            { token: token, authedDate: timestamp }
          ).then(data => {
            console.log("updated user");
            console.log(data);
            if (data.nModified === 1) {
              callback({ token: token, email: userAuth.email }, data);
            } else {
              callback("error", data);
            }
          });
        });
      } else {
        callback("error", { message: "Wrong email/password combination" });
      }
    }
  );
};
