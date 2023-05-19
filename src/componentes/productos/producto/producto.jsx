import React from "react";
import Contadorkart from "../../contador/Contadorkart";
import "../producto/producto.css"

const Producto = (props) => {
return (
        <div className="card_product">
            <div>
                <h2>{props.name}</h2>
            </div>
            <div className="img_product">
                <img src={props.img}/>
            </div>
            <p>{props.precio}</p>
            <p>{props.stock}</p>
            <Contadorkart initial={1} onAdd={(quantity) => console.log(quantity)} />
        </div>
);
};

export default Producto;