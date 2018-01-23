const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const mongoose = require('mongoose');
const utils = require('./utils');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const Strategy = require('passport-facebook').Strategy;
const cookieParser = require('cookie-parser');

var User = db.User;

passport.use(new Strategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: process.env.URL + '/login/facebook/return',
  passReqToCallback: true
},
function(req, accessToken, refreshToken, profile, done) {
  db.updateOrCreateUser({ fbId: profile.id, username: profile.displayName, sessionID: req.sessionID }, function (err, user) {
    return done(err, user);
  });
}
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

const app = express();

const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../react-client/dist`));
app.use('/semantic', express.static(`${__dirname}/../semantic/dist`));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ url: 'mongodb://localhost/tripcollab'})
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/login/facebook',
  passport.authenticate('facebook'));

app.get('/login/facebook/return',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/checkSession', (req, res) => {
  User.findOne({ sessionID: req.sessionID }, (err, user) => {
    if (user) {
      res.send({ userId: user._id, name: user.username});
    } else {
      res.send();
    }
  });
});

app.get('/logOut', (req, res) => {
  db.logout(req.sessionID, function() {
    res.send();
  });
});

app.get('/search', (req, res) => {
  var location = req.query.location || '';
  utils.search(location, function(err, results) {
    // error handlerserver
    res.status(200).send(results);
  });
});

app.get('/users/:userId/events', (req, res) => {
  var userId = req.params.userId;
  db.getUserEvents(userId, (err, events) => {
    if (err) { res.sendStatus(403); }
    res.status(200).send(events);
  });
});

app.delete('/users/:userId/events/:eventId', (req, res) => {
  var userId = req.params.userId;
  var eventId = req.params.eventId;
  db.deleteUserEvent(userId, eventId, (err, events) => {
    if (err) { res.sendStatus(403); }
    res.status(200).send(events);
  });
});

app.post('/users/:userId/events', (req, res) => {
  var userId = req.params.userId;
  var event = req.body.event;
  db.addUserEvent(userId, event, (err, events) => {
    if (err) { res.sendStatus(403); }
    res.status(200).send(events);
  });
});

app.listen(port, () => {
  console.log('listening on port 3000!');
});

