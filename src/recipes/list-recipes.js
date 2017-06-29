const Recipe = require('./recipe-model');

module.exports = (req, res) =>  Recipe.find()