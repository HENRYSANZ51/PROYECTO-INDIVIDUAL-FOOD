import { useState} from 'react'
import { useDispatch } from 'react-redux';
import { filterHealthScore } from '../../redux/actions';
import style from './filter.module.css'

const HealthScore = () => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    const dispatch = useDispatch();


    
     const handleChange = (event) => {
      const option = event.target.value
       setOpcionSeleccionada(option);
       dispatch(filterHealthScore(option))
     };

    return (
       <select value={opcionSeleccionada} onChange={handleChange} className={style.selectFilter}>
            <option  value="" disabled defaultValue >HEALTH SCORE</option>
            <option value='asc'>ASC</option>
            <option value='desc'>DESC</option>
       </select>
    
  )
}

export default HealthScore
