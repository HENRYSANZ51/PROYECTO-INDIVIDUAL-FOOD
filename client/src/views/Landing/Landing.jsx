import { NavLink } from "react-router-dom"

import food from '../../img/foodimg.png'
import video from '../../video/Gastronomico.mp4'


import style from './Landing.module.css'
const Landing = ()=> {
    return (
        <div className={style.containergrid}>
           
            <div className={style.redes} >
                <div>
                    <a href="https://www.linkedin.com/in/henry-sanchez-salazar/" target='_black'><i className={`fa-brands fa-linkedin-in ${style.iconLanding}`}></i></a>
                    <a href="https://github.com/HENRYSANZ51?tab=repositories" target='_black'><i className={`fa-brands fa-github-alt ${style.iconLanding}`}></i></a>
                  
                </div> 
            </div>


            <main className={style.main}>
              <div className={style.colum1}>
                <div className={style.info}>
                    <h3>Are You Hungry?</h3>
                    <h1>Don t Wait!</h1>
                    <p>Let start to order food now</p>
                    <NavLink to='/home' style={{textDecoration: 'none'}}>
                    <button className={style.btnstart}>Check Out Menu</button>
                    </NavLink>
                    
                </div>

                <div  className={style.video}>
                    <video src={video}  autoPlay muted loop />
                    {/* <iframe  src="https://www.youtube.com/embed/ZRQeBKTbzYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                </div>

              </div>




              <div  className={style.colum2}>
                <div className={style.mainimg}>
                    <img src={food} alt="food" />
                </div>
              </div>
            </main>
        </div>
    )
}

export default Landing