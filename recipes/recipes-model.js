const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList,
  getInstructions
}

// GET all DONE
function getRecipes() {
  return db("recipes");

};

//Get by ID Done
//return a list of ingrdients and quantities for recipe
function getRecipesById(id) {
  return db("recipes").where({ id }).first();
};

// //GET steps DONE
// function getShoppingList(id) {
//   return db("schemes")
//   .join("steps", "schemes.id", "steps.scheme_id")
//   .select("schemes.scheme_name", "steps.step_number", "steps.instructions" )
//   .where({ scheme_id: id })
//   .orderBy("steps.step_number")
// };

//GET shopping list
function getShoppingList(recipe_id) {
  return db('recipes')
  .join("ingredients", "ingredients.name", "recipe_ingredients.quantities")
}

//GET instructions







