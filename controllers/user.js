const User = require("../models/user");
const PostControler = require("./post");
const SourceControler = require("./source");
const Source = require("../models/source");

/**
 * Controller to check the user
 * @function check
 * @param {{name:string,pass:string,email:string}} fields - User object
 * @param {function} callback - Callback function to return response
 * @returns {object}
 */
module.exports.fetch = (token, callback) => {
  console.log("- fetching posts:");
  // console.log(token);
  User.findByToken(token, response => {
    if (response === { authed: false }) {
      console.log("...posts/fetch/user not found");
      callback(response);
    } else {
      console.log("...posts/fetch/user found");
      Source.getListOfSources(response, sources => {
        console.log("- list of sources");
        console.log(sources);
        // console.log(sources.length);
        if (sources.length > 0) {
          console.log("size matters");
          PostControler.list(
            { sources: sources, mode: "all" },
            posts => {
              console.log("-- posts:");
              console.log(posts);
              callback(posts);
            }
          );
        } else {
          console.log("size doesn't matter");
          callback([]);
        }
      });
    }
  });
};
module.exports.showPost = (options, callback) => {
  console.log("- fetching post to show:");
  User.findByToken(options.token, id => {
    console.log("responsed:");
    console.log(id);
    if (id) {
      PostControler.postById(options.id, response => {
        callback({ authed: true, post: response });
      });
    }
  });
};
module.exports.createSource = (options, callback) => {
  console.log("\x1b[33m", ` - Control/User/createSource: `);
  console.log("");
  User.findByToken(options.token, id => {
    console.log("-- user found:");
    console.log(id);
    if (id) {
      const fields = {
        name: options.fields.name,
        url: options.fields.url,
        home: options.fields.home,
        userId: id
      };
      Source.createSource(fields, response => {
        console.log("-- createSource responded:");
        console.log(response);
        callback(response);
      });
      // );
    } else {
      console.log("...user not found");
      callback({
        message: "Control/User/createSource: User.findByToken found nothing"
      });
    }
  });
};
module.exports.refresh = (token, callback) => {
  console.log("\x1b[33m", " - Control/User/refresh");
  console.log(token);
  User.findByToken(token, id => {
    SourceControler.findByUserId({ id: id, mode: "all" }, sources => {
      PostControler.refresh(sources, response => callback(response));
    });
  });
};

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
// check if token valid
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
          callback({ status: status, id: response._id, user: token });
        });
      }
    }
  });
};
