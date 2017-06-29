const Recipe = require('./recipe-model');

module.exports = (req, res, next, id) => {
  Recipe.findById(id)
    .then(recipe => {
      req.recipe = recipe;
      next();
    })
    .catch(err => next(err))
}