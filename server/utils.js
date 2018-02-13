const axios = require('axios');
const search = (location, cb) => {
  var key = process.env.YELP_API_KEY;

  function searchTerm(term) {
    return axios({
      url: `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&limit=10&sort_by=rating`,
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + key
      }
    });
  }

  axios.all([searchTerm('restaurants'), searchTerm('hotels'), searchTerm('festivals')])
    .then(axios.spread(function (restaurantResponse, hotelResponse, festivalResponse) {
      cb(null, {
        restaurants: restaurantResponse.data.businesses,
        hotels: hotelResponse.data.businesses,
        events: festivalResponse.data.businesses
      });
    }))
    .catch(function (error) {
      console.log(error);
      cb(error, null);
    });
};

module.exports.search = search;
