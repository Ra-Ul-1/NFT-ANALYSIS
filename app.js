
 

// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");


const app = express();

// Session settings: allows our app to maintain the sessions and our users in it
app.use(
    session({
      secret: 'some secret goes here',
      resave: true,
      saveUninitialized: false
    })
  );

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// Packages used for authentication (Session & Passport)
const session = require('express-session');
const passport = require('passport');
 
// Passport initial setup
require('./config/passport');

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
// const allRoutes = require("./routes");
// app.use("/api", allRoutes);

const marketOverview = require('./routes/marketOverview');

// connect routes to app.js
app.use("/", marketOverview);

const authRouter = require('./routes/auth.routes'); // <== has to be added
app.use('/api', authRouter); // <== has to be added


 


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
