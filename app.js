
// to make a new node project, require the express module
const express = require("express");
const https = require("https");

// initialise a new express app
const app = express();
const port = 3000;

// make app listen to port 3000
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

// GET REQUEST - run server via nodemon

app.get("/", (req, res) => {
  // we can call the https module, a native node module, to make a get request to an API
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=44579a6b9e1e41782e49cbbc73acfa42&units=metric"
  // the https.get method takes a url for the API we are making a get request to and a callback function
  https.get(url, (response) => {
    // lets test if the get request works
    console.log(response)
  })
  res.send("This app is working.")
})
