## Voyage

 Pinterest for travelers!

## Team

  - Product Owner: Grant Spilsbury
  - Scrum Master: Luna Kim
  - Software Engineer: Ralph Plumley
  - Software Engineer: Patty Kovash

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Create env File](#create-env-file)
1. [Contributing](#contributing)

## Usage

Used for storing trip inspiration for individuals. Think of it as Pinterest for travelers. A user is able to search for restaurants, hotels, and events for a desired location. Users are able to save restaurants, hotels, and events that to a travel board.

## Requirements

Dependencies

"axios": "^0.17.1",
"body-parser": "^1.17.2",
"connect-ensure-login": "^0.1.1",
"connect-mongo": "^2.0.1",
"cookie-parser": "^1.3.5",
"express": "^4.15.0",
"express-session": "^1.15.6",
"jquery": "^3.3.1",
"mongoose": "^4.8.6",
"passport": "^0.4.0",
"passport-facebook": "^2.1.1",
"pg": "^6.4.2",
"pg-hstore": "^2.3.2",
"react": "^15.6.2",
"react-dom": "^15.4.2",
"react-scrollable-anchor": "^0.5.0",
"replace": "^0.3.0",
"semantic-ui": "^2.2.13",
"tedious": "^2.2.4"

Dev Dependencies

"babel-core": "^6.23.1",
"babel-loader": "^6.3.2",
"babel-preset-es2015": "^6.22.0",
"babel-preset-react": "^6.23.0",
"babel-preset-stage-0": "^6.24.1",
"eslint": "^4.16.0",
"eslint-config-hackreactor": "git://github.com/reactorcore/eslint-config-hackreactor.git",
"eslint-plugin-import": "^2.8.0",
"eslint-plugin-jsx-a11y": "^6.0.3",
"eslint-plugin-react": "^7.5.1",
"webpack": "^2.2.1"

## Development

Once you have forked the repo from https://github.com/HackBlocks/Voyage , install all the dependencies.

### Installing Dependencies

From within the root directory:

1) npm install
2) Create .env file (Follow steps below to set up .env file)
3) npm run react-dev
4) npm run server-dev

### Create env File

Inside the root folder, create a new file named ".env". Inside this file you will want to have to following:

`export YELP_API_KEY="(paste key value here)"`

## Getting the tokens for the API calls

We use Yelp's API to collect the data, so you will need an API key for Yelp to make requests. There are links below to create your own API key.
* Yelp API Key: https://www.yelp.com/fusion

## Contributing & Acknowledgments

See CONTRIBUTING.md for contribution guidelines

Thanks to HiRs and other staff that helped with our issues!

Thanks to the Greenfield (https://github.com/TeamVoyage/Voyage) group for answering questions and fun project for us to build on!
