var express = require("express");
var router = express.Router();

const PostControler = require("../../controllers/post");
const SourceControler = require("../../controllers/source");
const UserController = require("../../controllers/user");

const localToken = process.env.TOKEN;

router.post("/", function(req, res, next) {
  console.log("");
  console.log("\x1b[34m", "§ Router - Incoming request:");
  console.log("");

  // 32 - green
  // 34 - blue
  // 33 - yellow
  // 31 - red
  // 30 - black
  // 35 - pink
  // 36 - cyan
  // 37 -grey
  // console.log("\x1b[29m", `~ Source.getSourceByName: `);
  // console.log("\x1b[28m", `~ Source.getSourceByName: `);
  // console.log("\x1b[27m", `~ Source.getSourceByName: `);
  // console.log("\x1b[26m", `~ Source.getSourceByName: `);
  console.log(req.body.query);
  console.log("");
  const area = req.body.query.action[0];
  const action = req.body.query.action[1];
  const id = req.body.query.id;
  const fields = req.body.query.fields;
  const userToken = req.body.query.token;

  // verify token
  if (userToken === "") {
    const verify = req.body.query.action === ["user", "verifyCookies"];
    if (verify) {
      // if request to verify token
      if (fields) {
        // if fields exist
        UserController.checkToken(fields, response => res.send(response));
      } else {
        // if fields are missing
        res.send({ message: "Unauthorized" });
      }
    } else {
      // blank
      res.send({ message: "Unauthorized" });
    }
  } else {
    if (area === "source") {
      switch (action) {
        case "fetch":
          console.log("\x1b[32m", "§ Router - Fetch sources");
          console.log("");
          UserController.findByToken(userToken, id => {
            // console.log("user id:");
            // console.log(id);
            SourceControler.findByUserId({ id: id, mode: "all" }, sources => {
              console.log("- route-source-fetch > response");
              console.log(sources);
              res.send(sources);
            });
          });
          break;
        case "create":
          if (fields) {
            console.log("\x1b[32m", "§ Router - Create source");
            console.log("");
            console.log(fields);
            console.log("");
            UserController.createSource(
              { token: userToken, fields: fields },
              response => {
                res.send(response);
              }
            );
          }
          break;
        case "update":
          console.log("\x1b[32m", "§ Router - Update source");
          console.log("");
          console.log(fields);
          console.log("");

          if (fields) {
            // call for update method
            UserController.findByToken(userToken, user => {
              if (user) {
                SourceControler.updateSource(fields, response =>
                  res.send(response)
                );
              } else {
                res.send({ message: "Unauthorized" });
              }
            });
          } else {
            res.send({ message: "Required information is missing" });
          }
          break;
        case "delete":
          if (id) {
            SourceControler.delete({ _id: id }, response => res.send(response));
          }
          break;
      }
    } else if (area === "post") {
      switch (action) {
        case "fetch":
          console.log("\x1b[32m", "§ Router - Fetch posts");
          UserController.fetch(userToken, response => {
            res.send(response);
          });
          break;
        case "show":
          if (id) {
            console.log("\x1b[32m", "§ Router - Fetch post to show");
            UserController.showPost({ token: userToken, id: id }, response => {
              res.send(response);
            });
          }
          break;
        case "refresh":
          console.log("\x1b[32m", "§ Router - Refresh posts");
          UserController.refresh(userToken, response => {
            res.send(response);
          });
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
    } else if (area === "user") {
      switch (action) {
        case "signOff":
          if (fields) {
            UserController.signOff(fields, response => res.send(response));
          }
          break;
        case "verifyCookies":
          console.log("\x1b[32m", "§ Router - Verify cookies");
          console.log("");
          if (fields) {
            UserController.checkToken(
              { token: userToken, email: fields.email },
              response => res.send(response)
            );
          }
          break;
        case "login":
          console.log("\x1b[32m", "§ Router - Login user");
          console.log("");
          if (fields) {
            UserController.check(fields, response => res.send(response));
          }
          break;
        case "create":
          console.log("create user");
          if (fields) {
            UserController.create(fields, response => res.send(response));
          }
          break;
      }
    }
  }
});

// router.get("/posts", (req, res, next) => {
//   const token = req.headers.authorization;

//   if (token != localToken) {
//     res.send({ message: "unauthorized" });
//   } else {
//     PostControler.list("all", response => res.send(response));
//   }
// });

// router.get("/sources", (req, res, next) => {
//   const token = req.headers.authorization;

//   if (token != localToken) {
//     res.send({ message: "unauthorized" });
//   } else {
//     SourceControler.list("all", response => res.send(response));
//   }
// });

// router.get("/post/*", (req, res, next) => {
//   const token = req.headers.authorization;

//   if (token != localToken) {
//     res.send({ message: "unauthorized" });
//   } else {
//     PostControler.postById(req.path, response => res.send(response));
//   }
// });

router.get("/*", (req, res, next) => {
  res.send({ message: "Unauthorized" });
});

module.exports = router;
