var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../database/models/user");

var userController = {};

// Restrict access to root page
userController.home = function (req, res) {
  res.render("index", { user: req.user });
};

// Go to registration page
userController.register = function (req, res) {
  res.render("register");
};

// Post registration
userController.doRegister = function (req, res) {
  console.log({ body: req.body });
  console.log("Do register");
  User.register(
    new User({ username: req.body.email, name: req.body.email }),
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        return res.render("/", { user: user });
      }

      passport.authenticate("local")(req, res, function () {
        res.redirect("/");
      });
    }
  );
};

// Go to login page
userController.login = function (req, res) {
  res.render("login");
};

// Post login
userController.doLogin = function (req, res) {
  passport.authenticate("local")(req, res, function () {
    res.redirect("/");
  });
};

// logout
userController.logout = function (req, res) {
  req.logout();
  res.redirect("/");
};

module.exports = userController;
