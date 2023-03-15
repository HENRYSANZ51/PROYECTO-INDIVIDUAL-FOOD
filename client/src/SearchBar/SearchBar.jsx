import { NavLink } from "react-router-dom"
import style from './SearchBar.module.css'
import {useDispatch} from 'react-redux'
import { useState } from "react";
import { searchName } from "../redux/actions";

const SearchBar = () =>{
  const dispatch = useDispatch();

    const [recipe, setRecipe] = useState('');

    const handleChange = (event) => {
        setRecipe(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(searchName(recipe));
    };

 
    return(
        <div className={style.SearchBar}>
          <div className={style.navigation}>
            <nav className={style.nav}>
                <ul>
                  
                    <li> <NavLink  className={style.inactivelink} to='/home'> Home</NavLink></li>
                    <li> <NavLink  className={style.inactivelink} to='/about'> About</NavLink></li>
                    {/* <li> <NavLink  className={style.inactivelink} to='/home'> Favorites</NavLink></li> */}
                    <li> <NavLink  className={style.inactivelink} to='/create'> Create</NavLink></li>
                 
                </ul>
            </nav>
          </div>
          <div className={style.search}>
            <div className={style.inputSearch}>
                <button  type="submit" onClick={(e)=> handleSubmit(e)}> <i className={`fa-solid fa-magnifying-glass ${style.iconsearch}`}></i></button>
                <input placeholder="Search a recipe..." onChange={handleChange}></input>
            </div>
          </div>
        </div>
    )
}

export default SearchBar