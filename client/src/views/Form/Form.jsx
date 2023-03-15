import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "./Select";
import { createRecipe, getDiets } from "../../redux/actions";
import style from "./Form.module.css";

const initialState = {
    nombre: "",
    resumen: "",
    health_score: 0,
    instrucciones: "",
    imagen: "",
    diets: [],
  }

export const validate = (input)=>{
  let errors = {};
  if(!/^([^0-9]*)$/.test(input.nombre)) errors.nombre = 'not numbers';
  if(!input.resumen) errors.resumen = 'Obligatory field';
  if(input.health_score < 0 || input.health_score > 100) errors.health_score = 'the number must be between 0 and 100';
  if(!input.instrucciones) errors.instrucciones = 'Instrucciones is required';
  if(!input.imagen) errors.imagen = 'Imagen is required';
  if(input.diets.length < 1 ) errors.diets = 'Choose at least one diet';
 return errors
}
  

export const Form = () => {
  const diets = useSelector((state) => state.diets);

  const dispatch = useDispatch();

  const [input, setInput] = useState(initialState)
  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    const property = event.target.name;

    property === "health_score"
      ? setInput({ ...input, [property]: Number(event.target.value) })
      : setInput({ ...input, [property]: event.target.value });

      setErrors(validate({
        ...input,
        [property]: event.target.value
    }))
  };


  function handleSubmit(e) {
    e.preventDefault();
    if(input.diets.length) {
    dispatch(createRecipe(input))
    alert('Recipe created')
    setInput(initialState)
  } 
  }

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div className={style.main}>
      <div className={style.absolute}></div>

      <div className={style.infoDetail}>
        <form onSubmit={handleSubmit} className={style.form}>
          <h1>Create your Recipe </h1>
          <div>
            <label htmlFor="nombre"> Nombre: </label>
            <input
              type="text"
              name="nombre"
              onChange={handleInput}
              value={input.nombre}
              placeholder='Title...'
              required
            />
            {errors.nombre && <p >{errors.nombre}</p>}
          </div>
          <div>
            <label htmlFor="resumen"> Resumen: </label>
            <textarea 
              name="resumen"
              onChange={handleInput}
              value={input.resumen} placeholder='Summary...'
              required
              rows="4"
              cols="50"
              >
              </textarea>
            {errors.resumen && <p >{errors.resumen}</p>}
          </div>
          <div>
            <label htmlFor="health score"> Health Score: </label>
            <input
              type="number"
              name="health_score"
              onChange={handleInput}
              value={input.health_score}
              placeholder='Number between 0 - 100'
              required
              min={0}
              max={100}
            />
            {errors.health_score && <p >{errors.health_score}</p>}
          </div>
          <div>
            <label htmlFor="instrucciones"> Instrucciones: </label>
            <textarea    
              name="instrucciones"
              onChange={handleInput}
              value={input.instrucciones}
              required
              placeholder="Steps...">
            </textarea>
            {errors.instrucciones && <p >{errors.instrucciones}</p>}
          </div>
          <div>
            <label htmlFor="imagen"> Imagen: </label>
            <input
              type="text"
              name="imagen"
              onChange={handleInput}
              value={input.imagen}
              placeholder='Copy here your route...'
              required
            />
            {errors.imagen && <p >{errors.imagen}</p>}
          </div>
          <div>
            <Select
            diets = {diets} 
            input = {input}
            setInput = {setInput}
            errors = {errors}
            setErrors = {setErrors}
            />
          </div>
          <button type="submit">CREATE</button>
        </form>
      </div>
    </div>
  );
};


