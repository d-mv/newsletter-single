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
    console.log("- ctr-post-list");
    console.log(options);
    // if ()
    let sourceIds = [];
    options.sources.map(source => {
      sourceIds.push(source._id.toString());
    });
    // find all posts with defined sourceIds
    console.log("- cntr-post-list > aggregate");
    Post.aggregate([
      {
        $project: {
          source: 1,
          sourceId: 1,
          title: 1,
          url: 1,
          author: 1,
          published: 1,
          parsed: 1,
          readTime: 1,
          pages: 1,
          star: 1,
          read: 1,
          text: {
            $substrCP: ["$text", 0, 800]
          }
        }
      },
      {
        $match: {
          sourceId: {
            $in: sourceIds
          }
        }
      }
    ])
      .sort({ published: -1 })
      .then(data => {
        console.log("+++");
        console.log(data);
        callback(data);
      })
      .catch(err => callback(err));
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
  console.log("- object");
  console.log(id);
  const query = {
    _id: id
    // _id: id.substr(6, id.length)
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
module.exports.refresh = (resSource, callback) => {
  // Source.getListOfSources("", (errSource, resSource) => {
  //   if (errSource) callback(errSource);
  Post.refreshPosts(resSource, (errPost, resPost) => {
    errPost ? callback(errPost) : callback(resPost);
  });
  // });
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
