const expect = require('expect.js');
const deleteRecipe = require('./delete-recipe');
const Recipe = require('./recipe-model');
const db = require('../../db');


describe('delete recipe', () => {
  const recipe = new Recipe({ name: 'My recipe', instructions: 'My recipe instructions' });

  beforeEach(() => db.connect());
  beforeEach(() => recipe.save());
  afterEach(() => db.disconnect());

  it('should delete recipe by id', () => {
    const req = {
      recipe
    };
    const res = {};
    return deleteRecipe(req, res);
  })
})