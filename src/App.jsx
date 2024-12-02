import ItemDetailContainer  from "./Components/ItemListContainer/ItemDetailContainer/ItemDetailContainer.jsx";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer.jsx";
import NavBar from "./Components/NavBarContainer/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext.jsx";
import Cart from "./Components/Cart/Cart.jsx";


function App ()
{
    return(<>
  
<BrowserRouter>
    <CartProvider>
        <NavBar/>
            <Routes>
                <Route exact path="/" element={ <ItemListContainer/> }/>
                <Route exact path="/category/:categoryId" element={ <ItemListContainer/> }/>
                <Route exact path="/item/:Id" element={<ItemDetailContainer/>}/>
                <Route exact path="/cart" element={<Cart/>}/>
                <Route path="*" element={<h1>Not found 404 </h1>}/>
            </Routes>
    </CartProvider>
</BrowserRouter>
    </>
    )
}
export default App;
