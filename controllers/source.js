const Source = require("../models/source");

module.exports.list = (mode, callback) => {
  console.log("- cntr-source-list");
  if (mode === "all") {
    Source.getListOfSources("", response => {
      callback(response);
    });
  }
};
module.exports.findByUserId = (options, callback) => {
  if (options.mode === "all") {
    // console.log(options);
    console.log("asking model");
    Source.getListOfSources(options.id, (err, response) => {
      console.log("- cntr-source-finrByUserId>response");
      err ? callback(err) : callback(response);
    });
  }
};
module.exports.createSource = (options, callback) => {
  console.log("\x1b[33m", ` - Control/Source/createSource: `);
  console.log("");
  const fields = {
    name: options.source.name,
    url: options.source.url,
    home: options.source.home,
    userId: options.user
  };
  Source.createSource(fields, (err, response) => {
    err ? callback(err) : callback(response);
  });
};
module.exports.updateSource = (query, callback) => {
  console.log("\x1b[33m", ` - Control/Source/createSource: `);
  console.log("");
  Source.updateOne(
    {
      _id: query._id
    },
    {
      name: query.name,
      url: query.url,
      home: query.home
    }
  ).then(data => {
    if (data.nModified === 1) {
      callback({ message: "Source updated" });
    } else {
      callback({ message: "Source was not updated" });
    }
  });
};

module.exports.delete = (id, callback) => {
  Source.deleteSource(id, (err, response) => {
    err ? callback(err) : callback(response);
  });
};
