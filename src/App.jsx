import ItemDetailContainer  from "./Components/ItemListContainer/ItemDetailContainer/ItemDetailContainer.jsx";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer.jsx";
import NavBar from "./Components/NavBarContainer/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App ()
{
    return(<>
    <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route exact path="/" element={ <ItemListContainer/> }/>
                <Route exact path="/category/:categoryId" element={ <ItemListContainer/> }/>
                <Route exact path="/item/:Id" element={<ItemDetailContainer/>}/>
                <Route exacth path ="/category/:categoryId/item/:Id" element={<ItemDetailContainer/>}/>
                <Route path="*" element={<h1>Not found 404</h1>}/>
            </Routes>

    </BrowserRouter>
    </>
    )
}
export default App;
