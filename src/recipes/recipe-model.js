const mongoose = require('mongoose');
const Schema = mongoose.Schema;

delete mongoose.models.Recipe;
delete mongoose.modelSchemas.RecipeSchema;

// create a schema
const RecipeSchema = new Schema({
  name: { type: String, maxlength: 255 },
  instructions: String  
},
{
  timestamps: true
});
//create a model from schema
module.exports = mongoose.model('Recipe', RecipeSchema);
