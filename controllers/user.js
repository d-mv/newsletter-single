const User = require("../models/user");

/**
 * Controller to check the user
 * @function check
 * @param {{name:string,pass:string,email:string}} fields - User object
 * @param {function} callback - Callback function to return response
 * @returns {object}
 */
module.exports.check = (fields, callback) => {
  console.log('controller')
  User.check(fields, (err, response) => {
    err ? callback(err) : callback(response);
  });
};
