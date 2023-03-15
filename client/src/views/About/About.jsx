import style from './About.module.css'
import imgAbout from '../../img/software-developer.jpg'

const About = () => {
    return (
        <div className={style.About}>
            <div className={style.absolute}/>
            <div className={style.infoContainer}>
                <div className={style.flexCenter}>
                    <div className={style.containerImagen}>
                        <img src={imgAbout} alt="Imagen" />
                    </div>
                    <div className={style.texto}>
                    <div className={style.infoPrincipal}>
                        <h2>¿Quién soy?</h2>
                        <h4>Soy Henry Sánchez, estudiante Developer Full Stack en HENRY.
                            <br/>
                            <br/>
                            Así de sencillo y de complejo al mismo tiempo.
                            <br/>
                            Detrás: mucha ilusión, mucho aprendisaje, trabajo y esfuerzo, pero tambien grandes recompensas, como:
                            <ul>
                                <li>Tener la oportunidad de relizar mi propio proyecto, e implementar las tecnologias aprendidas a lo largo de la cursada.</li>
                                <li>Crecer cada día de la mano de compañeros y personas increibles.</li>
                            </ul>
                        </h4>
                    </div>
                    
                    <div className={style.infoPrincipal}>
                        <h2>¿Que es eso de PI Food ?</h2>
                        <h4>Es un proyecto individual (PI), que consume data desde una API externa.
                            <br/>
                            Y que tiene como objetivos:
                            <br/>
                            
                            <ul>
                                <li>Construir una Single Page Application utlizando las tecnologías: React, Redux, Node, Express y Sequelize.</li>
                                <li>Poner en práctica recursos básicos de estilos y diseño (UX : UI).</li>
                                <li>Afirmar y conectar los conceptos aprendidos en la carrera.</li>
                                <li>Aprender mejores prácticas.</li>
                                <li>Aprender y practicar el workflow de GIT.</li>
                               
                            </ul>
                        </h4>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
