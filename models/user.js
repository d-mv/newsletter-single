const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
module.exports.checkToken = (user, callback) => {
  console.log("finding by token");
  console.log(user);
  User.findOne({ email: user.email, token: user.token }, (err, response) => {
    console.log("findOne");
    console.log(response);
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
  });
};
module.exports.findByToken = (token, callback) => {
  console.log("finding by token");
  console.log(token);
  User.findOne({ token: token }, (err, response) => {
    console.log(err);
    console.log(response);
    err ? callback(err) : callback(response._id);
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
      if (userAuth) {
        const timestamp = new Date();
        const token = "345abc";
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
      } else {
        callback("error", { message: "Wrong email/password combination" });
      }
    }
  );
};
