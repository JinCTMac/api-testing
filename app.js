
// to make a new node project, require the express module
const express = require("express");

// initialise a new express app
const app = express();
const port = 3000;

// make app listen to port 3000
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

// GET REQUEST

app.get("/", (req, res) => {
  res.send("This app is working.")
})
