import { useState} from 'react'
import { useDispatch } from 'react-redux';
import { orderByName } from '../../redux/actions';
import style from './filter.module.css'

const Order = () => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    const dispatch = useDispatch();

    
     const handleChange = (event) => {
      const option = event.target.value
       setOpcionSeleccionada(option);
       dispatch(orderByName(option))
     };

    return (
       <select value={opcionSeleccionada} onChange={handleChange} className={style.selectFilter}  >
            <option  value="" disabled defaultValue >ORDER</option>
            <option value='asc'>A-Z</option>
            <option value='desc'>Z-A</option>
       </select>
    
  )
}

export default Order
