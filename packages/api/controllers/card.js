
const Card = require('../models/card');

// SIMPLE CRUD
module.exports = {
  find: () => {
    return Card.find();
  },
  findOne: ({ params }) => {
    return Card.findOne(params);
  },
  update: ({ params, body }) => {
    return Card.findOneAndUpdate(params, body, { new: true });
  },
  create: ({ body }) => {
    return new Card(body).save();
  },
  delete: ({ params }) => {
    return Card.findOneAndDelete(params);
  }
};
