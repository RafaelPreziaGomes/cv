//  requirements

const express = require("express");

const ejs = require("ejs");

const fs = require("fs");

// initialize express

const app = express()

//  read the html files

// read index.html

const indexHtml = fs.readFileSync(__dirname, "./public/index.html")

// serve static files

app.get("/", (req,res) => {
    
    res.render(indexHtml)
})

//  listening for requests on port 3000

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

