import axios from 'axios'

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE = 'GET_RECIPE';
export const ORDER = 'ORDER';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_BY_HEALTH_SCORE = 'GET_BY_HEALTH_SCORE';
export const GET_BY_DIETS = 'GET_BY_DIETS';
export const SELECCIONAR_DIETS = 'SELECCIONAR_DIETS';
export const CREATE_RECIPE = 'CREATE_RECIPE';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const GET_CREATE_FILTER = 'GET_CREATE_FILTER'




export const getRecipes = () => {
    return async function (dispatch) {
        const recipes = (await axios.get('http://localhost:3001/recipes')).data;
        dispatch({type:GET_RECIPES, payload: recipes})
    }
}
export const getCreateRecipes = (type)=>{
    return {type:GET_CREATE_FILTER, payload: type} 
}

export const getRecipe = (id) =>{
    return async function (dispatch){
        const recipe = (await axios.get(`http://localhost:3001/recipes/${id}`)).data;
        dispatch({type: GET_RECIPE, payload: recipe})
    }
}



export const searchName = (name) => {
    return async function (dispatch){
        const filterName = (await axios.get(`http://localhost:3001/recipes?name=${name}`)).data
        dispatch({type: GET_BY_NAME, payload: filterName})
    }
}

export const filterHealthScore = (type)=> {
    return {type: GET_BY_HEALTH_SCORE , payload: type}

}

export const filterByDiets = (diets)=>{
    return {type: GET_BY_DIETS, payload: diets}
}

export const getDiets = ()=> {
    return async function (dispatch){
        const getDbDiets = (await axios.get('http://localhost:3001/diets')).data;
        dispatch({type: SELECCIONAR_DIETS, payload: getDbDiets })
    }
}

export const createRecipe = (payload) => {
    return async () => {
        let info = await axios.post('http://localhost:3001/recipes', payload);
        return info;
    }
}

export const orderByName = (type)=>{
    return {type: ORDER_BY_NAME, payload: type}
}