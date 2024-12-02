import { useCart } from "../../hooks/useCart";

export default function CartItem({id, name , quantity, price})
{
    const {removeItem} = useCart()

    const handleRemove = (id)=>{
        removeItem(id)
    }


    return (
        <div className="itemContainer">

            <header><h2>{name}</h2></header>
            <p>Cantidad:{quantity}</p>
            <p>Precio: ${price}</p>
            <p>Subtotal: ${price * quantity}</p>
            <button onClick={()=>handleRemove(id)}>Borrar articulo</button>
        </div>
    )
}