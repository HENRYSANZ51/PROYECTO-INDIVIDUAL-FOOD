
import Cards from "../../Components/Cards/Cards"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getDiets, getRecipes} from "../../redux/actions";

import style from './Home.module.css'
import Order from "../../Components/Filter/Order";
import HealthScore from "../../Components/Filter/HealthScore";
import Diets from "../../Components/Filter/Diets";
import Filter from "../../Components/Filter/Filter";
import Paginado from "../../Components/Filter/Paginado";


const Home = ()=> {
  const recipes = useSelector(state => state.recipes )
  const [page, setPage] = useState(0);
  const [recipesToShow, setRecipesToShow] = useState([]);

  const dispatch = useDispatch();
  
 
  useEffect(() => {
    if (recipes.length === 0) {
      dispatch(getRecipes());
      dispatch(getDiets())
    }

  }, [recipes,dispatch]);

  useEffect(() => {
    if (recipes.length > 0) {
      setRecipesToShow(recipes.slice(page, page + 9));
     
    }

  }, [recipes, page, setRecipesToShow]);

  
    return (
        <div className={style.Home}>
          <div className={style.fondohome}></div>
          <div style={{height: '80px'}}></div>
   
          <div className={style.containerflex}>
            <div className={style.maincenter}>
              <div className={style.containerfilter}>
                  <Filter/>
                  <Order/>
                  <HealthScore/>
                  <Diets/>
                  <Paginado
                   page={page}
                   setPage={setPage}
                   max={Math.ceil((recipes.length / 9))}
                   />
              </div>


              <div className={style.containercards}>
                <Cards 
                recipesToShow = {recipesToShow}
                />
              <div className={style.paginado} >
                {page === 0 ? "":<button onClick={() => setPage(page - 9)}>Back</button>}
                {page + 9 >= recipes.length ? "":<button  onClick={() => setPage(page + 9)}>Skip</button>}
              </div>
              </div>
            </div>
          </div>

          
        </div>
    )
}

export default Home