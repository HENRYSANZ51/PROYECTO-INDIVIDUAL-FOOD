import {NavLink} from 'react-router-dom'
import style from './Card.module.css'

const Card = (props)=> {
  

    return (
        <NavLink to={`/home/${props.id}`} className={style.link}>
        <div className={style.Card}  >
           <div className={style.contenedorImagen}>
            <img src={props.imagen} alt={props.nombre} />
           </div>

           <div className={style.infoCard}>
            <h2>{props.nombre}</h2>
            <span className={style.diets}>
                <h3><b> Diets Types: </b></h3>
                <p>{props.diets.join('-')}</p>
            </span>
            
           </div>
        </div>
        </NavLink>
    )
}

export default Card