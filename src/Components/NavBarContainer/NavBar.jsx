import Title from "./Title.jsx"
import Productos from "./Productos.jsx";
import Carrito from "../CartWidget/CartWidget.jsx";

import "./navBar.css"
function NavBar()
{
    return(
        <div className ="navBarContainer">
        <Title titulo="Omega"/>
        <Productos/>
       
        <Carrito id="carrito"/>
        </div>
    )

};
export default NavBar;
