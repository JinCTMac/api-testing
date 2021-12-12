

// to make a new node project, require the express module
const express = require("express");
// to make get requests to an API, we need the HTTPS module
const https = require("https");
const bodyParser = require("body-parser");

// initialise a new express app
const app = express();
const port = 3000;

// initialise body-parser

app.use(bodyParser.urlencoded({ extended: true }));

// make app listen to port 3000
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

// GET REQUEST - run server via nodemon

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
  // we can set query = to the req.body.cityName so that query becomes the city that the person is searching for
  // below code handles API call
  const query = req.body.cityName;
  const apiKey =
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;
  // we use the native node module https to make a get request to an external server
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

      // ex) we can also convert JS objects into JSON via JSON.stringify() method
      const testObject = {
        name: "ナルト",
        favourite_food: "ラメん",
        rival: "サスケ"
      };
      console.log(JSON.stringify(testObject));

      // 4) we can then look at the JS object we get back, and then access the main key which contains another object and we can access the temp key to get the value of temperature, etc
      const temp = weatherData.main.temp;
      const city = weatherData.name;
      // the weather object is an array so we access it with array indexing
      const weatherDescription = weatherData.weather[0].description;

      // to access the image associated with the weather given, we can access the .icon value from the JSON and write an image tag with src = to that url
      const icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`

      // 5) use res.write to write multiple lines to send back, then use res.send() to send them all back at once, as we can only have one res.send() per request
      // ex) need res.set to make html tags not display along with the res.write
      res.set("Content-Type", "text/html");


      res.write(`<h3>The weather is ${weatherDescription} today.</h3>`);
      res.write(`<h1>The temperature in ${city} is ${temp} degrees celsius.</h1>`);
      res.write(`<img src=${icon}>`)
      res.send()
    })
  })
})
