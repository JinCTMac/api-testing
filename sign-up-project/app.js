
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

// initialise app with express

const app = express();

// specify static folder that holds css/images
app.use(express.static("public"));

// set port to 3000
const port = 3000;

app.listen(port, () => {
  console.log(`App is listening in at port ${port}`)
})

// GET request
app.get("/", (req, res) => {
  // res.send("This app is working!")
  res.sendFile(__dirname + "/index.html")
})


// POST request
