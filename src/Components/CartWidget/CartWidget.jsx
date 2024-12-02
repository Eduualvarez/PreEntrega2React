import { Link } from "react-router-dom";
import "./CartWidget.css"
import { useCart } from "../../hooks/useCart";


function Carrito (){
    const {totalQuantity} = useCart()
    return (<>
       <Link id="cartTitle" to="/cart">Carrito</Link>
        <input  id ="cartNotification" value={totalQuantity} disabled/>
    </>)
}
export default Carrito;