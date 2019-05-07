const User = require("../models/user");

/**
 * Controller to check the user
 * @function check
 * @param {{name:string,pass:string,email:string}} fields - User object
 * @param {function} callback - Callback function to return response
 * @returns {object}
 */
module.exports.check = (fields, callback) => {
  User.check(fields, (err, response) => {
    err ? callback(err) : callback(response);
  });
};
module.exports.create = (fields, callback) => {
  User.create(fields, (err, response) => {
    if (err) {
      callback(err);
    } else {
      if (response._id) {
        const fields = { _id: response._id };
        User.auth(fields, (token, data) => {
          const status = token === "error" ? false : true;
          callback({ status: status, id: response._id, token: token });
        });
      }
    }
  });
};
