import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail=({img, name, stock, description, price})=>
    {
        const [quantity, setQuantity]= useState(0);
        const handleAdd = (cantidad)=>
            {
                setQuantity(cantidad)
            }
        
        return (
        <div className="card-Detail">

            <h1>{name}</h1>
            <img src={img} alt={`imagen de ${name}`}/>
            <p>Stock:<b>{stock}</b></p>
            <p>{description}</p>
            <p><b>${price}</b></p>
           

            <div>
        {quantity === 0 ? (
          <ItemCount stock={stock} onAdd={handleAdd} />
        ) : (
          <Link to="/cart">Finalizar Compra</Link>
        )}
      </div>
        </div>


        )
    }
    export default ItemDetail;


