const ValidationError = require('mongoose/lib/error/validation');
const expect = require('expect.js');
let Recipe = require('./recipe-model');
const db = require('../../db');

describe('recipe model', () => {
  const recipe = new Recipe({ name: 'My recipe', instructions: 'My recipe instructions' });

  beforeEach(() => db.connect());
  afterEach(() => recipe.remove())
  afterEach(() => db.disconnect())

  it('should create recipes', () =>
    recipe.save()
      .then((newRecipe) => {
        expect(newRecipe.name).eql(recipe.name);
        expect(newRecipe.instructions).eql(recipe.instructions);
        expect(newRecipe).to.have.property('createdAt');
        expect(newRecipe).to.have.property('updatedAt');
      })
  )
  it('should return validation error on saving when name exceeds 250 characters', () => {
    const invalidRecipe = new Recipe({ name: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', instructions: 'My recipe instructions' });
    return invalidRecipe.save()
      .then(() => expect().fail('Expected the validation to fail, but it succeeded'))
      .catch(err => expect(err instanceof ValidationError).to.be.ok())        
  })
});