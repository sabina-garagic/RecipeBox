const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const connect = () => {
  mongoose.connect('mongodb://127.0.0.1:27117/recipeboxdb');
};

const disconnect = () => {
  mongoose.disconnect();
};

module.exports = {
  connect, 
  disconnect
}