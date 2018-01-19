const express = require('express');
//const passportSetup = require('./config/passport-setup');
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
      db.updateOrCreateUser({ fbId : profile.id, username: profile.displayName,  sessionID: req.sessionID }, function (err, user) {
        return done(err, user);
      });
    }
  ));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id,function(err,user){
    done(err, user);
  });
});


const app = express();

const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../react-client/dist`));
//app.set('view engine', 'ejs');

// app.use('/auth', authRoutes);

// location, price, categories populated with dummy data unless client sends
// params in req.body

// app.get('/auth/home', (req, res) => {
//   res.render('home');
// });

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
      res.send(true);
    } else {
      res.send(false);
    }
  });
});

app.get('/logOut', (req, res) => {
  db.logout(req.sessionID, function() {
    res.send(false);
  });
});

app.post('/eat', (req, res) => {
  console.log('eat endpoint hit');
  const term = 'restaurants';
  const options = {
    location: req.body.location || 'chicago',
    price: '1,2,3,4',
    term: term,
    categories: req.body.categories || '',
    api: 'yelp'
  };

  utils.getBusinessesOrEvents(options, (data) => {
    res.send(data);
  });
});

app.post('/explore', (req, res) => {
  console.log('explore endpoint hit');
  const term = 'tourism';
  const options = {
    location: req.body.location || 'newyork',
    term: term,
    // categories: req.body.categories || ['landmarks', 'galleries', 'parks', 'musuems'],
    api: 'yelp'
  };

  utils.getBusinessesOrEvents(options, (data) => {
    res.send(data);
  });
});

app.post('/party', (req, res) => {
  console.log('party endpoint hit');
  const options = {
    location: req.body.location || 'chicago',
    api: 'eventBrite'
  };

  utils.getBusinessesOrEvents(options, (data) => {
    res.send(data);
  });
});

app.post('/sleep', (req, res) => {
  console.log('sleep endpoint hit');
  const term = 'hotels';

  const options = {
    location: req.body.location || 'philadelphia',
    price: req.body.price || '3',
    term: term,
    api: 'yelp'
  };

  utils.getBusinessesOrEvents(options, (data) => {
    res.send(data);
  });
});

app.post('/trips', (req, res) => {
  db.saveTrip(req.body, () => {
    res.sendStatus(201);
  });
});

app.get('/trips', (req, res) => {
  db.getAllTrips((trips) => {
    res.send(trips);
  });
});

app.delete('/trips', (req, res) => {
  db.deleteTrip(req.params.id, (err, response) => {
    if (err) {
      res.sendStatus(501);
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(port, () => {
  console.log('listening on port 3000!');
});
