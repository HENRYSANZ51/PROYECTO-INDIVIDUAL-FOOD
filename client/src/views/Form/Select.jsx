import { validate } from "./Form";

const Select = ({diets, input, setInput, errors, setErrors}) => {

    const handleDietsChange = (event) => {
        const dietSeleccionada = event.target.value;
        const name = event.target.name;

        if (!input[name].includes(dietSeleccionada)) {
            setInput({
                ...input,
                [event.target.name]: [...input[name], dietSeleccionada],
            });
            
        }
        setErrors(validate({
          ...input,
          [event.target.name]: event.target.value
      }))
      };
      const handleDelete = (eliminar,name)=>{
        setInput({
          ...input,
          [name]: input[name].filter((el) => el !== eliminar),
        })
      }
      const hasSelectedValue = input.diets.length > 0;

    
      return (
        < >
          <label  htmlFor='diets'>Diets Tipes: </label>
          <select
            name='diets'
            onChange={handleDietsChange}
            defaultValue=""
            required
          >
            <option value="" disabled>
            Diets Tipes
            </option>
            {diets.map((el) => (
              <option key={el.id} value={el.nombre}>
                {el.nombre}
              </option>
            ))}
          </select>
          {errors.diets && <p >{errors.diets}</p>}
          <div >
                Diets seleccionadas:<br/>
                {input.diets.length > 0  && input.diets.map((diet) => (
                <button onClick={()=>handleDelete(diet,"diets")} key={diet}> {diet} </button>
                ))} 

           </div>
          
        </>
      );
    };

export default Select
