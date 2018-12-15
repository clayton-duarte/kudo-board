
const Card = require('../models/card');

// SIMPLE CRUD
module.exports = {
  find: async () => {
    const cards = await Card.find().sort({ hearts: -1, createdAt: 1 }).limit(50).exec();
    return cards;
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
