import { useState} from 'react'
import { useDispatch } from 'react-redux';
import { getCreateRecipes } from '../../redux/actions';
import style from './filter.module.css'

const Filter = () => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    const dispatch = useDispatch();

  
    
     const handleChange = (event) => {
       const type = event.target.value
       setOpcionSeleccionada(type);
        dispatch(getCreateRecipes(type))
     };

    return (
       <select value={opcionSeleccionada} onChange={handleChange} className={style.selectFilter}  >
            <option  value="" disabled defaultValue >FILTER </option>
            <option value='all'>All</option>
            <option value='api'>API</option>
            <option value='db'>DB</option>
       </select>
    
  )
}

export default Filter