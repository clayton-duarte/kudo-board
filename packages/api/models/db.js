
require('dotenv').config();
const mongoose = require('mongoose');

const { DB_USER, DB_PASSWORD, DB_URL, DB_PORT, DB_NAME } = process.env;
const mongoDB = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_URL}:${DB_PORT}/${DB_NAME}`;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose.connection;
