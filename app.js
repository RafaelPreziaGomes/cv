//  requirements

const express = require("express");

const fs = require("fs");

// initialize express

const app = express();

//  read the html files

//  get the index.html file at route /

// serve static files
app.use(express.static("public"));

app.get("/", (req, res) => {});

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

//  listening for requests on port 3000

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
