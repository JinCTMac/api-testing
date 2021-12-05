const express = require("express");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

// GET REQUEST

app.get("/", (req, res) => {
  res.send("This app is working.")
})
