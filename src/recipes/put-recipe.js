module.exports = (req, res) => {
    req.recipe.name = req.body.name;
    req.recipe.instructions = req.body.instructions;

    return req.recipe.save();      
  }