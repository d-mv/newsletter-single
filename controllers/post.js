const Post = require("../models/post");
const Source = require("../models/source");

/**
 * Controller for list of posts per user
 * @function list
 * @param {mode:string,sources:[]} mode - Mode: 'all' ..., sources - array of sources per user
 * @param {function} callback - Callback function to return response
 * @returns {object}
 */
module.exports.list = (options, callback) => {
  if (options.mode === "all") {
    // create array of requests with source IDs
    let sourceIds = [];
    options.sources.map(source => {
      sourceIds.push({ sourceId: source._id });
    });
    // find all posts with defined sourceIds
    Post.find({ $or: sourceIds })
      .sort({ published: -1 })
      .then(data => {
        callback(data);
      })
      .catch(e => console.log(e));
  }
};

/**
 * Controller for getting specific post
 * @function postById
 * @param {object} id - Request from Express
 * @param {function} callback - Callback function to return response
 * @returns {object}
 */
module.exports.postById = (id, callback) => {
  const query = {
    _id: id.substr(6, id.length)
  };
  Post.getPostById(query, (err, response) => {
    err ? callback(err) : callback(response);
  });
};

/**
 * Controller for refreshing posts parsing
 * @function refresh
 * @param {object} query - Empty
 * @param {function} callback - Callback function to return response
 * @returns {object}
 */
module.exports.refresh = (query, callback) => {
  Source.getListOfSources("", (errSource, resSource) => {
    if (errSource) callback(errSource);
    Post.refreshPosts(resSource, (errPost, resPost) => {
      errPost ? callback(errPost) : callback(resPost);
    });
  });
};
/**
 * Controller for updating post
 * @function refresh
 * @param {string} id - Post id to update
 * @param {object} fields - Fields with new values
 * @param {function} callback - Callback function to return response
 * @returns {object}
 */
module.exports.update = (id, fields, callback) => {
  Post.findOneAndUpdate(id, fields, (err, response) => {
    err ? callback(err) : callback(response);
  });
};
/**
 * Controller for deleting post
 * @function refresh
 * @param {string} id - Post id to delete
 * @param {function} callback - Callback function to return response
 * @returns {object}
 */
module.exports.delete = (id, callback) => {
  Post.deletePost(id, (err, response) => {
    err ? callback(err) : callback(response);
  });
};
