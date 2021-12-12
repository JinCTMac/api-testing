

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
  const url =
  // the https.get method takes a url for the API we are making a get request to and a callback function
  https.get(url, (response) => {
    // lets test if the get request works
    console.log(response)

    response.on("data", (data) => {
      // 1) the response.on method allows us to take a look at the JSON we've gotten back from the GET request
      console.log(data)

      // 2) we then need to parse that JSON via the JSON.parse method
      const weatherData = JSON.parse(data)
      // 3) this returns a JS object
      console.log(weatherData)

      // 4) we can then look at the JS object we get back, and then access the main key which contains another object and we can access the temp key to get the value of temperature, etc
      const temp = weatherData.main.temp;
      const city = weatherData.name;
      // the weather object is an array so we access it with array indexing
      const weatherDescription = weatherData.weather[0].description;
      console.log(temp)
      console.log(city)
      console.log(weatherDescription)

      // ex) we can also convert JS objects into JSON via JSON.stringify() method
      const testObject = {
        name: "ナルト",
        favourite_food: "ラメん",
        rival: "サスケ"
      };
      console.log(JSON.stringify(testObject));
    })
  })
  res.send("This app is working.")
})
