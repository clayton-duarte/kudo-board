
const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: [true, 'sender is required'],
  },
  recipient: {
    type: String,
    required: [true, 'recipient is required'],
  },
  message: {
    type: String,
    required: [true, 'message is required'],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  hearts: {
    type: Number,
    default: 0,
  },
});

module.exports = new mongoose.model('Cards', CardSchema);
