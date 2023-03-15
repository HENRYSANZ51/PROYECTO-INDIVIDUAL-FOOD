
const {infoApiFood, infoApiByID, getRecipeByName, addDbDiets, createOneRecipe, infoDb} = require('../controlers/foodControlers');
const {Diets} = require('../db');


const addRecipeById = async(req, res) =>{
    const {idRecipe} = req.params
    try {
       
        const response = await infoApiByID(idRecipe)
        res.status(200).json(response)

    } catch (error) {
        res.status(400).json({message: error.message})
    }

};
const addRecipeByName = async (req, res) =>{
    const {name} = req.query;
    try {
        if(name){
            const RecipeByName= await getRecipeByName(name)
            RecipeByName.length ? res.status(200).send(RecipeByName) : res.status(400).send('Receta no existe')
        }else{
            const api =  await infoApiFood()
            const db =   await infoDb()
            const allRecipes = [...api, ...db]
            res.status(200).json(allRecipes)
        }      
    } catch (error) {
       res.status(400).json({message: 'error en filter name '}) 
    }
};

const createRecipe = async (req, res) =>{
    try {
        const { nombre, resumen, health_score, instrucciones, imagen, diets } = req.body;
        const recipe = await createOneRecipe(nombre, resumen, health_score, instrucciones, imagen, diets);
        res.status(200).json(recipe);
      } catch (error) {
        console.error(error);
        res.status(400).send('Ha ocurrido un error al crear la receta');
      }
};

const addAllDiets = async(req, res) => {
    try {
        addDbDiets()
        const info = await Diets.findAll()
        res.status(200).json(info)
    } catch (error) {
        res.status(400).json({message: error.message}) 
    }
};

module.exports = {
    addRecipeById,
    addRecipeByName,
    createRecipe,
    addAllDiets,
}