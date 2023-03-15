import { useMemo, useCallback } from "react";
import style from './filter.module.css'

const Paginado = ({page, setPage, max}) => {
    const Pages = useMemo(() => { // paginado memoriazmos
        const pages = [];
       
            for (let i = 1; i <= max; i++) {
              pages.push(i);
            
            
        }
        return pages;
      }, [max]);

      const handleChange = useCallback((event) => { // cambiar paginado memorizamos
        const newValue = event.target.value;
        setPage(Number(newValue));
      }, [setPage]);

  return (
    <select value={page} onChange={handleChange} className={style.selectFilter}>
    <option  value="" disabled defaultValue >Page</option>
        {Pages.map((el,index)=>  <option key={el} value={(9*index)}>{el}</option>)}

    </select>
  )
}

export default Paginado
