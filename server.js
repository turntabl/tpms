"use strict";
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");
const SamlStrategy = require("passport-saml").Strategy;
const app = express();

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(
  new SamlStrategy(
    {
      entryPoint: process.env.ENTRY_POINT,
      issuer: process.env.ISSUER,
      path: "/auth/saml/callback",
      protocol: "https://",
      cert: process.env.CERT
    },
    function(profile, done) {
      return done(null, {
        email: profile.email
      });
    }
  )
);

app.use(cookieParser());
app.use(
  session({
    secret: "process.env.SECRET",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 60 * 1000
    }
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/login",
  passport.authenticate("saml", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

app.post(
  "/auth/saml/callback",
  passport.authenticate("saml", {
    successRedirect: "/",
    failureFlash: true
  }),
  function(req, res) {
    res.redirect("/login");
  }
);

app.all("*", function(req, res, next) {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated() || req.path == "/login") {
    next();
  } else {
    res.redirect("/login");
  }
});

app.use(express.static(__dirname + "/dist/tpms"));

module.exports = app;
