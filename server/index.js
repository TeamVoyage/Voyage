const express = require('express');
const path = require('path');
const authRoutes = require('./routes/auth-routes');
const bodyParser = require('body-parser');
const db = require('../database');
const mongoose = require('mongoose');
const utils = require('./utils');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../react-client/dist`));

app.post('/eat', (req, res) => {
  const term = 'restaurants';
  const options = {
    location: req.body.location,
    price: req.body.price || 4,
    term,
    categories: req.body.categories || '',
    api: 'yelp'
  };

  utils.getBusinessesOrEvents(options, (data) => {
    res.send(data);
  });
});

app.post('/explore', (req, res) => {
  const term = 'tourism';
  const options = {
    location: req.body.location,
    term,
    categories: req.body.categories || ['landmarks', 'galleries', 'parks', 'musuems'],
    api: 'yelp'
  };

  utils.getBusinessesOrEvents(options, (data) => {
    res.send(data);
  });
});

app.post('/party', (req, res) => {
  const options = {
    location: req.body.location,
    api: 'eventBrite'
  };

  utils.getBusinessesOrEvents(options, (data) => {
    res.send(data);
  });
});

app.post('/sleep', (req, res) => {
  const term = 'hotels';
  const options = {
    location: req.body.location,
    price: req.body.price,
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

app.listen(port, () => {
  console.log('listening on port 3000!');
});
