require('dotenv').config();

const axios = require('axios')
const {API_KEY} = process.env;
const {Recipe, Diets} = require('../db')
const {Op} = require('sequelize')


const infoApiFood = async ()=> {
    //const apiInfo = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data
    const apiInfo = (await axios.get('https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5')).data
    let infoClean = apiInfo.results.map(item => {
        return {
            id: item.id,
            nombre: item.title,
            imagen: item.image,
            resumen: item.summary,
            health_score: item.healthScore,
            instrucciones: item.analyzedInstructions.map(e => e.steps.map(i => {
                return {
                    number: i.number,
                    step: i.step
                    }})),
            diets: item.diets
        }
    })
   return infoClean;
};

const infoDb = async()=>{
  const recipes = await Recipe.findAll({
            include: {
              model: Diets,
              attributes: ['nombre'],
              through: { attributes: [] },
            }
          });
  const recipeString = recipes.map((recipe) => {
            const diets = recipe.diets.map((diet) => diet.nombre);
            return { ...recipe.toJSON(), diets };
          });
      
 return recipeString;
};
const apiInfoId = async (id)=> {
  const apiInfo = (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}` )).data
     
  let infoId = [apiInfo].map(item =>  {
    
    return {
      id: item.id,
      nombre: item.title,
      imagen: item.image,
      resumen: item.summary,
      health_score: item.healthScore,
      instrucciones: item.analyzedInstructions.map(e => e.steps.map(i => {
        return {
          number: i.number,
          step: i.step
        }})),
      diets: item.diets
        
      }})
  return {...infoId[0], instrucciones: infoId[0].instrucciones[0]};
}

const infoApiByID = async (id)=> {
  let infoId;
      if(id.includes("-")){
        const infodb = await Recipe.findByPk(id, {include: {
          model: Diets,
          attributes: ["nombre"],
          through: { attributes: [] },
        }})
      const db = infodb.diets.map((diet) => diet.nombre);
        
      infoId = {...infodb.toJSON(), diets:db};
      
      
      }  else {
      infoId = await apiInfoId(id)
          }
  return infoId;

};

const getRecipeByName = async (name)=>{
  
  const recetasApi =  await infoApiFood();
  const recetasApiFiltered = recetasApi.filter(receta => receta.nombre.toLowerCase().includes(name.toLowerCase()));
  const recetasDb = await infoDb()
  const recetasDbFiltered = recetasDb.filter(receta => receta.nombre.toLowerCase().includes(name.toLowerCase()));
  return [...recetasApiFiltered, ...recetasDbFiltered]
};

const addDbDiets = async ()=> {
    try {
        const infoDb = await Diets.findAll()
        return infoDb

    } catch (error) {
       error.message
    }
};
const createOneRecipe = async (nombre, resumen, health_score, instrucciones, imagen, diets) => {
    try {
      const recipe = await Recipe.create({
        nombre,
        resumen,
        health_score,
        instrucciones,
        imagen,
      });
      const dietsArr = Array.isArray(diets) ? diets : [diets];
     
      const recipeDiets = await Diets.findAll({
        where: {
          nombre:{
          [Op.in]: dietsArr,
        }
        },
      });
      await recipe.setDiets(recipeDiets);
      return recipe;

    } catch (error) {
      throw error;
    }
  };

module.exports = {infoApiFood, infoApiByID, getRecipeByName, addDbDiets, createOneRecipe, infoDb}