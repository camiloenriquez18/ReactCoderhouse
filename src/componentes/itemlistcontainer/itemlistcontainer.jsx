import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProductsById, getProducts } from '../../asyncMock';


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    useEffect(() => {
        getProducts()
        
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[])
    return(
        <div>
            <h3>{greeting}</h3>
            <ItemList products= {products}/>
        </div>
    )
}
export default ItemListContainer