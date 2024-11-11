import { useParams} from "react-router-dom";

import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductsById } from "../../../../asyncMock";

const ItemDetailContainer = ()=>{

    
    const [product, setProduct] = useState({});
  const {Id}=useParams()
  
    

    useEffect(()=>{

       getProductsById(Id).then(product=>setProduct(product))
        
    },[Id])

    return(
        <>
        <ItemDetail {...product}/>
        </>
    )
}
export default ItemDetailContainer