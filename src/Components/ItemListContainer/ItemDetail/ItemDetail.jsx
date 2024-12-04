import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { useCart } from "../../../hooks/useCart";
import { Link } from "react-router-dom";


const ItemDetail=({id, img, name, stock, description, price, category})=>
    {

    const {addItem, IsInCart} = useCart()
        const handleAdd = (count)=>
            {
               const productToAdd = {
                id, name, price, quantity: count
               };
               addItem(productToAdd)
            }
        
        return (
        <div className="card-Detail">

            <h1>{name}</h1>
            <img src={img} alt={`imagen de ${name}`}/>
            <p>Stock:<b>{stock}</b></p>
            <p>{description}</p>
            <p><b>${price}</b></p>
            <p><b>Categoria: {category}</b></p>

           

            <div>
        {
          IsInCart(id) ? (
            <Link to="/cart">Ir al carrito</Link>
          ):
          (
            <ItemCount stock = {stock} onAdd= {handleAdd}/>
          )
        }
      </div>
        </div>


        )
    }
    export default ItemDetail;


