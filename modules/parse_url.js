const fetch = require("node-fetch");
// const axios = require("axios");
const parser = require("fast-xml-parser");
const he = require("he");

const parserOptions = {
  attributeNamePrefix: "@_",
  attrNodeName: "attr", //default is 'false'
  textNodeName: "#text",
  ignoreAttributes: true,
  ignoreNameSpace: false,
  allowBooleanAttributes: false,
  parseNodeValue: true,
  parseAttributeValue: true,
  trimValues: true,
  cdataTagName: "__cdata", //default is 'false'
  cdataPositionChar: "\\c",
  localeRange: "", //To support non english character in tag/attribute values.
  parseTrueNumberOnly: false,
  attrValueProcessor: a => he.decode(a, { isAttributeValue: true }), //default is a=>a
  tagValueProcessor: a => he.decode(a) //default is a=>a
};

const parseResponse = response => {

  return 
};

const ParseUrl = url => {
  console.log(`~ processing: ${url}`);
  fetch(url)
    .then(res => res.text())
    .then(body => {return parseResponse(body)});
};

module.exports = ParseUrl;
