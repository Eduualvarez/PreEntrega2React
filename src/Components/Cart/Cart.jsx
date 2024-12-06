import "./Cart.css"
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useCart } from "../../hooks/useCart"

export default function Cart() {
  const {cart, clearCart, getTotal, totalQuantity} = useCart();

  const total = getTotal();
  
  if(totalQuantity === 0){
    return <h1>No hay items en el carrito</h1>
  }



  return (
    <div className="cartContainer">
      <h1>Carrito</h1>
      {cart.map((item)=> (
        <CartItem key={item.id} {...item}/>
        
      ))}
      <div className="total">
      <p >Total: ${total}</p>
      
      
        <button  id="clearCart" onClick={clearCart} >Limpiar Carrito</button>
      
      <Link className="checkout" to="/checkout" >Checkout</Link>
      </div>
    </div>
  
  );
}