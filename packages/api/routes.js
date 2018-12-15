
const microAPI = require('micro-api');
const card = require('./controllers/card');

// BASIC REST
module.exports = microAPI([
  {
    method: 'get',
    path: '/',
    handler: () => 'online',
  },
  {
    method: 'get',
    path: '/api/card',
    handler: card.find
  },
  {
    method: 'post',
    path: '/api/card',
    handler: card.create
  },
  {
    method: 'get',
    path: '/api/card/:_id',
    handler: card.findOne
  },
  {
    method: 'put',
    path: '/api/card/:_id',
    handler: card.update
  },
  {
    method: 'delete',
    path: '/api/card/:_id',
    handler: card.delete
  },
]);