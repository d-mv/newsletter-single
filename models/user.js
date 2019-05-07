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
  authed: { type: String },
  authedDate: { type: Date }
});

const User = (module.exports = mongoose.model("User", UserSchema));

module.exports.check = (fields, callback) => {
  User.findOne(
    { email: fields.email, password: fields.password },
    (err, response) => {
      if (err) {
        callback(err);
      } else {
        if (response) {
          callback({ user: "exist" });
        } else {
          callback({ user: "new" });
        }
      }
    }
  );
};
module.exports.create = (fields, callback) => {
  const newSource = new User(fields);
  newSource.save(callback);
};

module.exports.auth = (fields, callback) => {
  const timestamp = new Date();
  const token = "345abc";
  User.updateOne(
    { _id: fields._id },
    { auth: token, authedDate: timestamp }
  ).then(data => {
    if (data.nModified === 1) {
      callback(token, data);
    } else {
      callback("error", data);
    }
  });
};
