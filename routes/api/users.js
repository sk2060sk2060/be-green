var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");
const router = require("express").Router();
var userController = {};

// Post registration
userController.doRegister = function (req, res) {
  console.log("-------");
  console.log({ req });
  User.register(
    new User({ username: req.body.username, name: req.body.name }),
    req.body.password,
    function (err, user) {
      if (err) {
        return res.render("register", { user: user });
      }

      passport.authenticate("local")(req, res, function () {
        res.redirect("/");
      });
    }
  );
};

// route for register action
router.post("/register", userController.doRegister);
