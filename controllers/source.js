const Source = require("../models/source");

module.exports.list = (mode, callback) => {
  if (mode === "all") {
    Source.getListOfSources("", (err, response) => {
      err ? callback(err) : callback(response);
    });
  }
};
module.exports.createSource = (fields, callback) => {
  Source.createSource(fields, (err, response) => {
    err ? callback(err) : callback(response);
  });
};
module.exports.updateSource = (query, callback) => {
  Source.updateSource(query, (err, response) => {
    err ? callback(err) : callback(response);
  });
};
module.exports.delete = (id, callback) => {
  Source.deleteSource(id, (err, response) => {
    err ? callback(err) : callback(response);
  });
};
