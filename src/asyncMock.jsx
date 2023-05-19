import pw1 from "./componentes/assets/imagenes/pw1.png"
import pw2 from "./componentes/assets/imagenes/pw3.png"
import pw4 from "./componentes/assets/imagenes/pw4.png"

const products = [
    {id:"1", nombre: "Luminor Panerai 8 giorni", precio: "$10.000", img: pw1, stock:"20"},
    {id:"2", nombre: "Luminor Razer", precio: "$10.000", img: pw2, stock:"20"},
    {id:"3", nombre: "Luminor Marina eSteel", precio: "$10.000", img: pw4, stock:"20"}
]
export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}