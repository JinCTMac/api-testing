
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const { urlencoded } = require("body-parser");

// initialise app with express

const app = express();

// specify static folder that holds css/images
app.use(express.static("public"));

// make app use bodyparser
app.use(bodyParser.urlencoded({extended: true}));

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
app.post("/", (req, res) => {
  let email = req.body.email;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;

  let data = {
    members: [
      {
        email_address: email,
        status: "subscribed"
      }
    ]
  }

  console.log(email)
  console.log(firstName)
  console.log(lastName)
})
