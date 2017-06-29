const Recipe = require('./recipe-model');

module.exports = (req, res) => {
    const recipe = new Recipe({
      name: req.body.name,
      instructions: req.body.instructions
    });
    return recipe.save();      
  }