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
