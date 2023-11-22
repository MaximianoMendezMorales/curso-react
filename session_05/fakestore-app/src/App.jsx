import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import {CartProvider} from "./context/CartContext.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <main className="min-h-screen min-w-screen bg-gray-100">
                    <Navbar/>
                    <div className="w-full flex justify-center">
                        <div className="container flex p-4">
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/products" element={<Products/>}/>
                                <Route path="/cart" element={<Cart/>}/>
                            </Routes>
                        </div>
                    </div>
                </main>
            </BrowserRouter>
        </CartProvider>
    )
}

export default App
