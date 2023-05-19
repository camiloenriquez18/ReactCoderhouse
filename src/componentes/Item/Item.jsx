import "../Item/Item.css"
import Contadorkart from "../contador/Contadorkart.jsx"

const Item = ({id, nombre, img, precio, stock}) => {
    return(
        <div className="card_product1">
            <h2>{nombre}</h2>
            <img src={img} alt={nombre} className="ItemImg"/>
            <p>{precio}</p>
            <p>{stock}</p>
            <link to={`/item/${id}`} className="option">Ver Detalle</link>
            <Contadorkart stock={stock} initial={1} onAdd={(quantity) => console.log(quantity)} />
        </div>
    )
}

export default Item