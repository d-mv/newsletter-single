// module.exports.fetch = (token, callback) => {
//   console.log("- fetching posts:");
//   User.findByToken(token, id => {
//     SourceControler.findByUserId({ id: id, mode: "all" }, sources => {
//       PostControler.list({ sources: sources, mode: "all" }, posts => {
//         callback(posts);
//       });
//     });
//   });
// };
module.exports.Token = (request = "", callback) => {
  const dictionary = 'abcdefjhiklmnopqrstuvxyzABCDEFJHIKLMNOPQRSTUVXYZ0123456789!"#$%&()*+,-./:;<=>?@[]^_`{|}~'.split(
    ""
  );
  let token = "";
  for (let i = 0; i < 26; i++) {
    const sample = dictionary[Math.floor(Math.random() * dictionary.length)];
    token = token + sample;
  }
  console.log(token);
  callback(token);
};

// module.exports.Token;

// generate();
// console.log(token.split(",").join(""));
