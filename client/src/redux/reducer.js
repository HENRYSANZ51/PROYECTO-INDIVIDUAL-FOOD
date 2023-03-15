import { GET_RECIPE, GET_RECIPES, GET_BY_NAME, GET_BY_DIETS, SELECCIONAR_DIETS, CREATE_RECIPE, ORDER_BY_NAME, GET_CREATE_FILTER, GET_BY_HEALTH_SCORE } from "./actions"

const initialState = {
    recipes: [],
    recipe: {},
    diets: [],
    recipeName: [],
    copyRecipes: []
}

const  reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
        return {
            ...state,
            copyRecipes: action.payload,
            recipes: action.payload
        }
    case GET_RECIPE:
        return{
            ...state, 
            recipe: action.payload
        }
    case GET_BY_NAME:
        return {
            ...state,
            recipes: action.payload
        }
    case GET_BY_DIETS:
        return {
            ...state,
            recipes: state.copyRecipes.filter(recipe => recipe.diets.some(diet=> diet.toLowerCase() === action.payload.toLowerCase()))
        }
    case SELECCIONAR_DIETS:
      return {
        ...state,
        diets: action.payload
      }
    case CREATE_RECIPE:
      return {
        ...state,
      }
      case ORDER_BY_NAME:
       const optionSort = {
        asc: (a, b) => a.nombre.localeCompare(b.nombre),
        desc: (a, b) => b.nombre.localeCompare(a.nombre)
       }
        return {
            ...state,
            recipes: [...state.copyRecipes].sort(optionSort[action.payload])
        }
        case GET_CREATE_FILTER:
            const option = {
                all: state.copyRecipes,
                db: state.copyRecipes.filter((el) => typeof el.id === "string" ),
                api: state.copyRecipes.filter((el) => typeof el.id === "number" ),
            }
            return {
                ...state,
                recipes: option[action.payload]
            }
    case GET_BY_HEALTH_SCORE:
        const optionScore = {
            asc: (a, b) => a.health_score - b.health_score,
            desc: (a, b) => b.health_score - a.health_score
           }
            return {
                ...state,
                recipes: [...state.copyRecipes].sort(optionScore[action.payload])
            }
  
    default:
        return {
            ...state,
        }
  }
}

export default reducer