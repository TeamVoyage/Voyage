const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripcollab');
// mongoose.connect(process.env.MONGOLAB_PURPLE_URI);

let restaurantSchema = mongoose.Schema({
  name: String,
  imageUrl: String,
  url: String
});

let hotelSchema = mongoose.Schema({
  name: String,
  imageUrl: String,
  url: String
});

let eventSchema = mongoose.Schema({
  name: String,
  imageUrl: String,
  url: String
});

let attractionSchema = mongoose.Schema({
  name: String,
  imageUrl: String,
  url: String
});

let userSchema = mongoose.Schema({
  googleId: String,
  username: String,
  trips: Array
});

let boardSchema = mongoose.Schema({
  id: Number,
  likes: [eventSchema]
});

const User = mongoose.model('User', userSchema);
const Trip = mongoose.model('Trip', boardSchema);


let saveTrip = (tripInfo, cb) => {
  const trip = new Trip({
    id: id, //which id will be used? User or Facebook or Mongoose?
    likes: tripInfo
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
};

let deleteTrip = (id, cb) => {
  Trip.findByIdandRemove(id, (err, deleted) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, deleted);
    }
  })
};

let getAllTrips = (cb) => {
    Trip.find({}, (err, trips) => {
      if (err) {
        return handleError(err);
      } else {
        cb(trips);
      }
    });
  };


module.exports.deleteTrip = deleteTrip;
module.exports.saveTrip = saveTrip;
module.exports.getAllTrips = getAllTrips;

// // dummy data for testing
// const testTrip = {
//   name: 'example trip2',
//   location: 'chicago',
//   restaurants: [{name: 'Burger King', price: 1, rating: 3 }],
//   hotels: [{name: 'Hyatt', price: 2, rating: 3 }],
//   events: [{name: 'Some Comedy Show'}],
//   attractions: [{name: 'Space Musuem'}]
// };
//
// const testUser = new User({
//   googleId: 'daniel',
//   username: 'kelly',
//   trips: []
// });
//
// testUser.save(err => {
//   if(err) console.log(err);
// });

  // User.find({googleId: currentUser}, (err, user) => {
  //   user[0].trips = user[0].trips.concat(trip_id);
  //   user[0].save(err => {
  //     if(err) {
  //       console.log(err);
  //     }
  //   });
  // });

  // // test db functionality
// saveTrip(testTrip2, 'daniel');
