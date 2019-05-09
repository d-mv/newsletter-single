const User = require("../models/user");

/**
 * Controller to check the user
 * @function check
 * @param {{name:string,pass:string,email:string}} fields - User object
 * @param {function} callback - Callback function to return response
 * @returns {object}
 */
module.exports.check = (fields, callback) => {
  console.log("ctrl: check user");
  User.check(fields, response => {
    console.log("user exists?");
    console.log(response);
    console.log(fields);
    if (response.user === "exist") {
      User.auth(fields, (user, data) => {
        const status = user === "error" ? false : true;
        callback({
          status: status,
          user: user,
          data: data
        });
      });
    } else {
      callback(response);
    }
  });
};
module.exports.signOff = (fields, callback) => {
  User.signOff(fields, response => {
    callback(response);
  });
};
module.exports.checkToken = (fields, callback) => {
  User.checkToken(fields, response => {
    callback(response);
  });
};
module.exports.findByToken = (token, callback) => {
  User.findByToken(token, id => {
    callback(id);
  });
};
module.exports.create = (fields, callback) => {
  User.create(fields, (err, response) => {
    if (err) {
      callback(err);
    } else {
      if (response._id) {
        console.log("response from User.create");
        console.log(response);
        const fields = { _id: response._id };
        User.auth(fields, (token, data) => {
          const status = token === "error" ? false : true;
          callback({ status: status, id: response._id, token: token });
        });
      }
    }
  });
};
