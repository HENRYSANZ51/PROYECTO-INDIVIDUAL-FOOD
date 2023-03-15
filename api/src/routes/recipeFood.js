const {Router} = require('express');
const {addRecipes, addRecipeById, addRecipeByName, createRecipe} = require('../handlers/handlers')

const recipesRouter = Router();


recipesRouter.get('/:idRecipe', addRecipeById )
recipesRouter.get('/',  addRecipeByName)
recipesRouter.post('/', createRecipe)


module.exports = recipesRouter;