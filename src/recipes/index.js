const express = require('express');
const Recipe = require('./recipe-model');

const handleResponse = fn => (req, res) => {
  const promise = fn(req, res);   
  promise.then(data => res.json(data))
    .catch(err => res.status(400).json({ error: err }));    
}

const router = express.Router();
router.param('recipe_id', require('./find-recipe'))
router
  //http://localhost:8080/api/recipes
  .post('/', handleResponse(require('./post-recipe')))
  .get('/', handleResponse(require('./list-recipes')))
  //http://localhost:8080/api/recipes/:recipe_id)
  .get('/:recipe_id', require('./get-recipe'))
  .delete('/:recipe_id', handleResponse(require('./delete-recipe')) )
  .put('/:recipe_id', handleResponse(require('./put-recipe')));

module.exports = router;