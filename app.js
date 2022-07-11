//  requirements
///////////////////////////
////////////////////////////
const express = require("express");

const fs = require("fs");

// import the router
const router = require("./routes/router");

///////////////////////////
////////////////////////////

// initialize express

const app = express();

//  get the index.html file at route /

//  sending static files
////////////////////////////////
////////////////////////////////

// serve index.html file
app.use(express.static("public"));

//  get the html-website.html file at route /html-website
app.get("/html-website", (req, res) => {
  // set headers
  res.setHeader("Content-Type", "text/html");
  // send the Html file to the browser
  res.sendFile(__dirname + "/public/html-website.html");
});

//  get portifolio-hub.html file at route /portifolio-hub
app.get("/portifolio-hub", (req, res) => {
  // set headers
  res.setHeader("Content-Type", "text/html");
  // serve static files
  res.sendFile(__dirname + "/public/portifolio-hub.html");
});

////////////////////////////////
////////////////////////////////

//  export app

module.exports = app;
