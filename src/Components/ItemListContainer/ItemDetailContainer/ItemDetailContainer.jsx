import { useParams} from "react-router-dom";
import { db } from "../../../services/firebase";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = ()=>{

    
  const [product, setProduct] = useState({});
  const {Id}=useParams()
  
   
      useEffect(()=>{

        
        getDoc(doc(db, 'Products', Id))
        .then((querySnapshot) => {

          const prod = {id: querySnapshot.id, ...querySnapshot.data()}
          setProduct(prod)
          console.log(prod)
        })
        .catch((err)=> {
          console.log(err)
        })

       


      } ,[Id])

    return(
        <>
        <ItemDetail {...product}/>
        </>
    )
}
export default ItemDetailContainer