
const cors = require('micro-cors')();

const routes = require('./routes');
const db = require('./models/db');

db.on(
  'error',
  console.error.bind(console, 'MongoDB connection error:')
);

module.exports = cors(routes);