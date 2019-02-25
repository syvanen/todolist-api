'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://username:password@' + process.env.MONGODB_SERVICE_HOST + ':' + process.env.MONGODB_SERVICE_PORT + '/todolist',
  },
  mocks: {
    // enable this for non mock api
    // api: true
    api: false
  },
  seedDB: true
};
