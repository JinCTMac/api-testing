
const express = require("express");
const bodyParser = require("body-parser");

// initialise app with express

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App is listening in at port ${port}`)
})

// GET request
app.get("/", (req, res) => {
  res.send("This app is working!")
})


// POST request
