const axios = require("axios");
const dotenv = require('dotenv').config()

const apiUrl = process.env.REACT_APP_SERVER;
let post = { id: 0 };

//  fetch the data from api
async function fetchData(store, urlMod) {
  const url = urlMod ? `${apiUrl}/${urlMod}` : `${apiUrl}`;
  let data = "";
  try {
    data = await axios(url).then(response => response.data);
  } catch (e) {
    data = e.response;
  }
  if (store === "store") {
    post.id = data[0]._id;
  }
  return data;
}
//  push the data to api
// async function pushData(mode, urlMod) {
//   const url = `${apiUrl}/${urlMod}`;
//   let data = "";
//   if (mode === "json") {
//     data = await axios(url);
//   } else if (mode === "html") {
//     data = await axios(url).then(response => response.data);
//   } else {
//     console.log("mode is missing");
//   }
//   return data;
// }

// get html page on home
test("Server returns web-site", async () => {
  const data = await fetchData("");
  const dataCheck = {
    asymmetricMatch: actual =>
      actual === "<!DOCTYPE html>" || actual === "<!doctype html>"
  };
  expect(data.substr(0,15)).toEqual(dataCheck)
});

// get list of posts
test("API return list of posts", async () => {
  const data = await fetchData("store", "api/posts");
  expect(Array.isArray(data)).toBe(true);
});

// get full post
test("API return full post", async () => {
  const postToFetch = `api/post/${post.id}`;
  const data = await fetchData("", postToFetch);
  expect(typeof data).toBe("object");
  expect(data._id).toMatch(post.id);
  if (data.message) {
    expect(data.message).not.toBe("Cast to ObjectId failed for value");
  }
});

// get list of sources
test("API return list of sources", async () => {
  const data = await fetchData("", "api/sources");
  expect(typeof data).toBe("object");
});

// get error 404 on unknown page
test("API return error 404 on unknown page", async () => {
  const randomExt = Math.random();
  const urlExtension = `${randomExt}`;
  const data = await fetchData("", urlExtension);
  expect(data.status).toBe(404);
});
