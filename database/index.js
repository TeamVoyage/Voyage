const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/tripcollab');
mongoose.connect(process.env.MONGOLAB_PURPLE_URI);

const restaurantSchema = mongoose.Schema({
  name: String,
  imageUrl: String,
  url: String
});

const hotelSchema = mongoose.Schema({
  name: String,
  imageUrl: String,
  url: String
});

const eventSchema = mongoose.Schema({
  name: String,
  imageUrl: String,
  url: String
});

const attractionSchema = mongoose.Schema({
  name: String,
  imageUrl: String,
  url: String
});

const userSchema = mongoose.Schema({
  googleId: String,
  username: String,
  trips: Array
});

const tripSchema = mongoose.Schema({
  name: String,
  location: String,
  restaurants: [restaurantSchema],
  hotels: [hotelSchema],
  events: [eventSchema],
  attractions: [attractionSchema]
});

const User = mongoose.model('User', userSchema);
const Trip = mongoose.model('Trip', tripSchema);

const saveTrip = (tripInfo, cb) => {
  const trip = new Trip({
    name: tripInfo.name,
    location: tripInfo.location,
    restaurants: tripInfo.restaurants,
    hotels: tripInfo.hotels,
    events: tripInfo.events,
    attractions: tripInfo.attractions
  });

  const trip_id = trip._id;
  console.log('trip id: ', trip._id);

  trip.save(err => {
    if (err) {
      console.log(err);
    } else {
      cb();
    }
  });



  // User.find({googleId: currentUser}, (err, user) => {
  //   user[0].trips = user[0].trips.concat(trip_id);
  //   user[0].save(err => {
  //     if(err) {
  //       console.log(err);
  //     }
  //   });
  // });
};

const getAllTrips = (cb) => {
  Trip.find({}, (err, trips) => {
    if (err) {
      console.log(err);
    } else {
      cb(trips);
    }
  });
};

module.exports.saveTrip = saveTrip;
module.exports.getAllTrips = getAllTrips;
