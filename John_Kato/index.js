const express = require("express");
//Installing mongoose to connect to database
const mongoose = require("mongoose");
//Declaring bodyparser to fetch and convert information
const bodyParser = require("body-parser");
//Creating a server
const server = express();
// const session = require("express-session");
const path = require("path");




//Middleware
server.use(express.static(path.join(__dirname,'public')));

server.set("view engine", "pug");
server.set("views", path.join(__dirname, "views"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));



//connect to database 
mongoose.connect(
  "mongodb://localhost:27017/Kato-db",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err) {
    if (err) throw err;
    console.log("Successfully connected");
  }
);


//Import routes

const indexRoute = require("./routes/signuproutes");
server.use("/reg", indexRoute);

const regroutes = require('./routes/registrationroutes');
server.use('/reglist',regroutes);


//access public folder
server.use(express.static('public'))


server.listen(8300,()=>{
    console.log("Listening on port 8300");
});

