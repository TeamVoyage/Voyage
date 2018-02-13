const mongoose = require('mongoose');

let url = process.env.MONGODB_URI || 'mongodb://localhost/tripcollab';
mongoose.connect(url, { useMongoClient: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to mongo');
});

const logout = (sessionID, cb) => {
  User.update({ sessionID: sessionID }, { $set: { sessionID: '' }}, cb);
};

let userSchema = mongoose.Schema({
  username: String,
  fbId: String,
  sessionID: String,
  events: [{
    id: String,
    name: String,
    image_url: String,
    url: String
  }]
});

const User = mongoose.model('User', userSchema);

const updateOrCreateUser = (query, cb) => {
  User.findOne({ fbId: query.fbId }, (err, user) => {
    if (!user) {
      let newUser = new User({
        username: query.username,
        sessionID: query.sessionID,
        fbId: query.fbId
      });
      newUser.save(function(err, user) {
        cb(err, user);
      });
    } else {
      user.sessionID = query.sessionID;
      user.save(function(err, user) {
        cb(err, user);
      });
    }
  });
};

const addUserEvent = (userId, event, cb) => {
  User.findOne({ _id: userId }, (err, user) => {
    if (user) {
      var newEvents = user.events.concat([event]);
      user.events = newEvents;
      user.save(function(err, user) {
        cb(err, user.events);
      });
    } else {
      cb(err);
    }
  });
};

const deleteUserEvent = (userId, eventId, cb) => {
  User.findOne({ _id: userId }, (err, user) => {
    if (user) {
      var newEvents = user.events.filter(function(event) {
        return event.id !== eventId;
      });
      user.events = newEvents;
      user.save(function(err, user) {
        if (err) {
          cb(err);
        } else {
          cb(null, user.events);
        }
      });
    } else {
      cb(err);
    }
  });
};

const getUserEvents = (userId, cb) => {
  User.findOne({ _id: userId }, (err, user) => {
    if (user) {
      cb(null, user.events);
    } else {
      cb(err);
    }
  });
};

module.exports.updateOrCreateUser = updateOrCreateUser;
module.exports.User = User;
module.exports.logout = logout;
module.exports.getUserEvents = getUserEvents;
module.exports.addUserEvent = addUserEvent;
module.exports.deleteUserEvent = deleteUserEvent;
