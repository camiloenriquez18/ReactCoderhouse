import { useState } from "react"
import "../contador/contadorkart.css"

const Contadorkart = ({stock,initial,onAdd}) =>{
    const[quantity, setQuantity] = useState(initial)
    const increment = () => {
        if (quantity < stock){
            setQuantity(quantity+1)
        }
    }
    const decrement = () =>{
        if(quantity > 1)
        setQuantity(quantity-1)
    }

    return(
        <div className="contador">
            <div className="controles">
                <div className="buttons_controles">
                <button className="buton" onClick={increment} >+</button>
                <p>{quantity}</p>
                <button className="buton" onClick={decrement}>-</button>
                </div>
                <button className="buton" onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default Contadorkart