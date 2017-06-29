const expect = require('expect.js');
const Recipe = require('./recipe-model');
const putRecipe = require('./put-recipe');
const db = require('../../db');

describe('put recipe', () => {
  const recipe = new Recipe({ name: 'Recipe name', instructions: 'Recipe instructions' });
  beforeEach(() => db.connect());
  beforeEach(() => recipe.save())
  afterEach(() => recipe.remove())
  afterEach(() => db.disconnect());

  it.only('should update recipe', () => {
    const req = {
      recipe,
      body: { name: 'Updated name', instructions: 'Updated instructions'} 
    };
    const res = {};
    return putRecipe(req, res)
            .then(updatedRecipe => {
              expect(updatedRecipe.name).to.be.eql(req.body.name);
              expect(updatedRecipe.instructions).to.be.eql(req.body.instructions);
            });
  });
});