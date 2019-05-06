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
  password: { type: String }
});

const User = (module.exports = mongoose.model("User", UserSchema));

module.exports.check = (fields, callback) => {
  console.log("model");
  User.findOne({ email: fields.email }, (err, response) => {
    console.log("findOne");
    if (response) {
      console.log("exist");
    } else {
      console.log("does not exist");
    }
    err ? callback(err) : callback(response);
  });
};
