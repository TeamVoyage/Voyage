const axios = require('axios');
// const config = require('./config/config');

let filterBusinesses = (array) => {
  return array.map(business => {

    return {
      id: business.id,
      name: business.name,
      imageUrl: business.image_url,
      url: business.url,
      rating: business.rating
    };
  });
};

let filterEvents = (array) => {
  return array.map(event => {
    return {
      id: event.id,
      name: event.name.text,
      imageUrl: event.logo.original.url,
      url: event.url,
      description: event.description.text,
      start: event.start.local,
      end: event.end.local
    };
  });
};

let getBusinessesFromYelp = (term, categories, location, price, cb) => {
  // parameters:

  // let queryURL = `https://api.yelp.com/v3/businesses/search?categories=
  // ${category}&location=${location}&price=${price}&limit=10&sort_by=rating`;
  if (!categories) {
    categories = '';
  } else if (Array.isArray(categories)) {
    categories = categories.join(',');
  }

  if (!price) {
    price = '';
  }


  let queryURL = `https://api.yelp.com/v3/businesses/search?term=${term}&categories=${categories}&location=${location}&price=${price}&limit=10&sort_by=rating`;


  axios({
    method: 'get',
    url: queryURL,
    headers: {
      'Authorization': `Bearer ${process.env.YELP_API_KEY}`
    },
  })
    .then((response) => {
      cb(filterBusinesses(response.data.businesses));
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports.getBusinessesFromYelp = getBusinessesFromYelp;
