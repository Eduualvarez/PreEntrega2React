import { ItemList } from "./ItemList/ItemList";
//import { getProducts, getProductsByCategory } from "../../../asyncMock";

import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";




export function ItemListContainer()
{
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
  
    useEffect(()=>{
      const collectionRef = categoryId 
      ? query(collection(db,"Products"), where("category", "==", categoryId)) //por categoria
      :collection(db,"Products"); // todos los productos
      
      getDocs(collectionRef)
        .then((querySnapshot)=>{
          const products = querySnapshot.docs.map((doc)=>{
            return {id: doc.id, ...doc.data()}
          });
          setProducts(products)
         })
         .catch((err)=>{
          
         })
       
    }, [categoryId])


  return (
    <>
        
        <ItemList products={products} />
        
    </>
  )
};

