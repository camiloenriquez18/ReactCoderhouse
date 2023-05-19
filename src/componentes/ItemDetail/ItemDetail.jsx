import "../ItemDetail/ItemDetail.css"
import Contadorkart from "../contador/Contadorkart"

const ItemDetail = ({id, nombre, img, precio, stock}) => {
    return (
        <div>
            <div>
                <h2>{nombre}</h2>
            </div>
            <div>
                <img src={img} alt={nombre} className="ItemImg"/>
            </div>
            <div>
                <p>${precio}</p>
                <p>Stock:{stock}</p>
            </div>
            <div>
                <Contadorkart initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada")}/>
            </div>
        </div>
    )
}

export default ItemDetail