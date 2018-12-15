
const Card = require('../models/card');

module.exports = async () => {
  console.log("downvote");
  await Card.updateMany({}, { $inc: { hearts: -1 } });
  return Card.deleteMany({ hearts: { $lt: 0 } });
};
