var express = require("express");
var router = express.Router();

const PostControler = require("../../controllers/post");
const SourceControler = require("../../controllers/source");

router.post("/", function(req, res, next) {
  console.log(req.body);
  const area = req.body.query.action[0];
  const action = req.body.query.action[1];
  const id = req.body.query.id;
  const fields = req.body.query.fields;

  if (area === "source") {
    switch (action) {
      case "create":
        if (fields) {
          // call for create source method
          SourceControler.createSource(fields, response => res.send(response));
        }
        break;
      case "update":
        if (id && fields) {
          // call for update method
          const query = { id: id, fields: fields };
          SourceControler.updateSource(query, response => res.send(response));
        }
        break;
      case "delete":
        if (id) {
          SourceControler.delete({_id:id}, response => res.send(response));
        }
        break;
    }
  } else if (area === "post") {
    switch (action) {
      case "refresh":
        PostControler.refresh("", response => res.send(response));
        break;
      case "update":
        if (id && fields) {
          PostControler.update({ _id: id }, fields, response =>
            res.send(response)
          );
        }
        break;
      case "delete":
        if (id) {
          PostControler.delete({ _id: id }, response => res.send(response));
        }
        break;
      default:
        res.send(null);
        break;
    }
  }
});

router.get("/posts", (req, res, next) => {
  PostControler.list("all", response => res.send(response));
});

router.get("/sources", (req, res, next) => {
  SourceControler.list("all", response => res.send(response));
});

router.get("/post/*", (req, res, next) => {
  PostControler.postById(req.path, response => res.send(response));
});

module.exports = router;
