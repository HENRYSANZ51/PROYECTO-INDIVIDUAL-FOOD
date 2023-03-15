import Card from "../Card/Card"
import style from './Cards.module.css'

const Cards = ({recipesToShow})=> {

    
    
    return (
        <div className={style.Cards}>
         
            {
               recipesToShow.length && recipesToShow.map(item => {
                    return (
                        <Card 
                        key={item.id}
                        id={item.id}
                        nombre={item.nombre}
                        imagen={item.imagen}
                        diets={item.diets}
                   
                        />
                    )
                })
            }
       
        </div>
    )
}

export default Cards

