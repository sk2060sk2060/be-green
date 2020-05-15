const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
//const LocalStrategy = require("passport-local").Strategy;
const LocalStrategy = require("./passport/localStrategy");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view

app.use(routes);
// passport config items
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
var User = require("./database/models/user");

// passport.use(LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/begreen")
  .then(() => console.log("connection succesful"))
  .catch((err) => console.error(err));

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
