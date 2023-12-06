import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import ProductDetail from "./pages/Products/ProductDetail.jsx";
import Navbar from "./pages/Navbar.jsx";
import './App.css';
import Login from "./pages/Auth/Login.jsx";
import NewProduct from "./pages/Products/NewProduct.jsx";

function App() {
    return (
        <div className="min-h-screen min-w-screen">
            <BrowserRouter>
                <Navbar/>
                <main className="mx-56">
                    <Routes>
                        <Route path="/" element={ <Home/> }/>
                        <Route path="/cart" element={ <Cart/> }></Route>
                        <Route path="/products/:id" element={ <ProductDetail/> }></Route>
                        <Route path="/products/new" element={ <NewProduct/> }></Route>
                        <Route path="/login" element={ <Login/> }></Route>
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    )
}

export default App
