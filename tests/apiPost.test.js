const axios = require("axios");
const dotenv = require("dotenv").config();

const apiUrl = `${process.env.REACT_APP_SERVER}/api`;
let post = { id: 0 };
let state = {
  sourceId: ""
};
const testSource = {
  name: "Sample RSS feed",
  url: "https://www.feedforall.com/sample.xml",
  home: "https://www.feedforall.com"
};

//  fetch the data from api
// async function fetchData(store, urlMod) {
//   const url = urlMod ? `${apiUrl}/${urlMod}` : `${apiUrl}`;
//   let data = "";
//   try {
//     data = await axios(url).then(response => response.data);
//   } catch (e) {
//     data = e.response;
//   }
//   if (store === "store") {
//     post.id = data[0]._id;
//   }
//   return data;
// }
//  push the data to api
pushData = data => {
  const response = axios.post(apiUrl, data).then(response => response);
  return response;
};
// process the response
// processResponse = (response, searchItem) => {
//   console.log("searching");
//   let result = false;
//   response.map(item => {
//     if (item === searchItem) result = true;
//   });
//   return result;
// };

test("Create source", async () => {
  const testData = {
    query: {
      action: ["source", "create"],
      fields: testSource
    }
  };
  const data = await pushData(testData);
  state.sourceId = data.data._id;
  expect(data.status).toBe(200);
});

test("Update source", async () => {
  const fields = {
    name: "Sample RSS feed EDITED",
    home: "https://www.google.com"
  };
  const testData = {
    query: {
      action: ["source", "update"],
      id: state.sourceId,
      fields: fields
    }
  };
  const data = await pushData(testData);
  expect(data.data.nModified).toBe(1);
});

test("Delete source", async () => {
  const testData = {
    query: {
      action: ["source", "delete"],
      id: state.sourceId,
    }
  };
  const data = await pushData(testData);
  // console.log(data.data[0].deletedCount);
  expect(data.data[0].deletedCount).toBe(1);
  expect(data.status).toBe(200);
});