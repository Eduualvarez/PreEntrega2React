import ItemDetailContainer  from "./Components/ItemListContainer/ItemDetailContainer/ItemDetailContainer.jsx";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer.jsx";
import NavBar from "./Components/NavBarContainer/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Checkout from "./Components/Checkout/Checkout.jsx";
import { NotificationProvider } from "./context/notificationContext.jsx";


function App ()
{
    return(<>
  
<BrowserRouter>
    <CartProvider>
        <NotificationProvider>
        <NavBar/>
            <Routes>
                <Route exact path="/" element={ <ItemListContainer/> }/>
                <Route exact path="/category/:categoryId" element={ <ItemListContainer/> }/>
                <Route exact path="/item/:Id" element={<ItemDetailContainer/>}/>
                <Route exact path="/cart" element={<Cart/>}/>
                <Route exact path="/checkout" element={<Checkout/>}></Route>
                <Route path="*" element={<h1>Not found 404 </h1>}/>
            </Routes>
        </NotificationProvider>
    </CartProvider>
</BrowserRouter>
    </>
    )
}
export default App;
