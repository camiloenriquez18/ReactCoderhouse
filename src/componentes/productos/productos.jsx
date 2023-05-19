import React, { useState } from "react";
import Producto from "./producto/producto";
import pw1 from "../assets/imagenes/pw1.png"
import pw2 from "../assets/imagenes/pw2.png"
import pw3 from "../assets/imagenes/pw3.png"
import "../productos/productos.css"

const Productos = () => {
const [productos, setProductos] = useState([
    {
    id: 1,
    name: "Panerai Marine",
    precio: "$10000",
    img: pw1,
    stock: 20,
    },
    {
    id: 2,
    name: "Panerai Gold",
    precio: "$10000",
    img: pw2,
    stock: 20,
    },
    {
    id: 3,
    name: "Panerai Luminor",
    precio: "$10000",
    img: pw3,
    stock: 20,
    },
]);

return (
    <div className="product_container">
    {productos.map((producto) => {
        return (
        <Producto
            key={producto.id}
            name={producto.name}
            img={producto.img}
            precio={producto.precio}
            stock={producto.stock}
        />
        );
    })}
    </div>
);
};

export default Productos;