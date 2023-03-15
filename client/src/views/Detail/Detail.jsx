import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipe } from "../../redux/actions";
import style from './Detail.module.css'


const Detail = (props)=> {
   const dispatch = useDispatch();
   const params = useParams()
    const recipe = useSelector(state => state.recipe);

    useEffect(()=>{
        dispatch(getRecipe(params.id))
    },[dispatch, params.id])

    return (
        <div className={style.detail}>
          <div className={style.absolute}></div>
 
                  <div className={style.infoDetail}>
                    <div className={style.flexPrincipal}>
                        <div className={style.flexCenter}>
                            <div className={style.containerImagen}>
                                <img src={recipe.imagen} key={recipe.nombre} alt={recipe.nombre} />
                            </div>

                            <div className={style.infoPrincipal}>
                                <h1>{recipe.nombre}</h1>
                                <h4 >Health Score: <b>{recipe.health_score}</b> </h4>
                                <h4 >Diets types: <b>{recipe.diets && recipe.diets.join('-')}</b> </h4>
                            </div>
                        </div>
                    </div>
                        
                        <div dangerouslySetInnerHTML={{ __html: recipe.resumen }} className={style.resumen}/>  {/*convierto texto html en innerHTML*/} 
                        
                        {!params.id.includes('-') && <h4 className={style.steps}><b>Instrucciones:</b> <br/>{recipe.instrucciones && recipe.instrucciones.map(i => {
                            return (
                                <div key={i.number} >
                                    <h5 className={style.infoSteps}>
                                        <li>{i.number}</li>  
                                        <b>{i.step}</b>
                                    </h5>
                                </div>
                            )
                        } )}</h4>}
                       { params.id.includes('-') && <h4 className={style.steps}> <b>Instrucciones:</b> <br/> {recipe.instrucciones}</h4>}
                   </div>
                
        </div>
    )
}

export default Detail