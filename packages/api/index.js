
const cors = require('micro-cors')();

const downVoteTask = require('./controllers/downvote');
const routes = require('./routes');
const db = require('./models/db');

db.on(
  'error',
  console.error.bind(console, 'MongoDB connection error:')
);


setInterval(downVoteTask, 1000 * 60 * 15);

module.exports = cors((req, res) => {
  if (req.method === 'OPTIONS') return 'permited';
  return routes(req, res);
});