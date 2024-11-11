import { ItemList } from "./ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../../asyncMock";
import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";



export function ItemListContainer()
{
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
  
    useEffect(()=>{
        const asyncFunctions = categoryId ? getProductsByCategory : getProducts
        asyncFunctions(categoryId)
            .then(data => setProducts(data))
    }, [categoryId])


  return (
    <>
        
        <ItemList products={products} />
    </>
  )
};
