import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByDiets } from "../../redux/actions";
import style from './filter.module.css'

const Diets = () => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    const dispatch = useDispatch();
    const diets = useSelector(state => state.diets)
 
    
     const handleChange = (event) => {
      const option = event.target.value
       setOpcionSeleccionada(option);
       dispatch(filterByDiets(option))
     };

    return (
       <select value={opcionSeleccionada} onChange={handleChange} className={style.selectFilter}>
            <option  value="" disabled defaultValue >DIETS</option>
            {diets.map(diet => <option key={diet.nombre} value={diet.nombre}>{diet.nombre}</option>)}
       </select>
    
  )
}

export default Diets
