// import app from "./app";

const app = require("./app.js");

//  node server.js
// //  start the server

//  listening for requests on port 3000

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
