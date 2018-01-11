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
let getAxios = (queryURL, key, api, cb) => {
  axios({
    method: 'get',
    url: queryURL,
    headers: {
      'Authorization': `Bearer ${key}`
    },
  })
    .then((response) => {
      if (api === 'yelp') {
        cb(filterBusinesses(response.data.businesses));
      }
      if (api === 'eventBrite') {
        cb(filterEvents(response.data.events));
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

let getBusinessesOrEvents = (options, cb) => {
  // parameters:

  // let queryURL = `https://api.yelp.com/v3/businesses/search?categories=
  // ${category}&location=${location}&price=${price}&limit=10&sort_by=rating`;
  console.log('api: ', options.api);
  let queryURL = '';
  let key = '';
  let api = options.api;
  if (api === 'yelp') {
    if (!options.categories) {
      options.categories = '';
    } else if (Array.isArray(options.categories)) {
      options.categories = options.categories.join(',');
    }
    if (!options.price) {
      options.price = '';
    }
     queryURL = `https://api.yelp.com/v3/businesses/search?term=${options.term}&categories=${options.categories}&location=${options.location}&price=${options.price}&limit=10&sort_by=rating`;
     key = process.env.YELP_API_KEY;
  }

  if (api === 'eventBrite') {
     queryURL = `https://www.eventbriteapi.com/v3/events/search/?q=concerts+festivals+shows&location.address=${options.location}&sort_by=date`
     key = process.env.EVENT_BRITE_API_KEY;
  }

  getAxios(queryURL, key, api, cb);
};

// let getBusinessesFromYelp = (term, categories, location, price, cb) => {
//   // parameters:

//   // let queryURL = `https://api.yelp.com/v3/businesses/search?categories=
//   // ${category}&location=${location}&price=${price}&limit=10&sort_by=rating`;
//   if (!categories) {
//     categories = '';
//   } else if (Array.isArray(categories)) {
//     categories = categories.join(',');
//   }

//   if (!price) {
//     price = '';
//   }


//   let queryURL = `https://api.yelp.com/v3/businesses/search?term=${term}&categories=${categories}&location=${location}&price=${price}&limit=10&sort_by=rating`;


//   axios({
//     method: 'get',
//     url: queryURL,
//     headers: {
//       'Authorization': `Bearer ${process.env.YELP_API_KEY}`
//     },
//   })
//     .then((response) => {
//       cb(filterBusinesses(response.data.businesses));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

module.exports.getBusinessesOrEvents = getBusinessesOrEvents;
