import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import ProductDetail from "./pages/Products/ProductDetail.jsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./pages/Navbar.jsx";

function App() {
    const cart = useSelector(state => state.cart)
    const [ elementsInCart, setElementsInCart ] = useState(0)

    useEffect(() => {
        setElementsInCart(cart.length)
    }, [ cart ]);

    return (
        <BrowserRouter>
            <h1 className="text-3xl font-bold underline pb-5 mx-5">FakeStore App</h1>

            <div className="flex mx-5 mb-3">
                <Link to="/" className="">Home</Link>
                <Link to="/cart" className="">Cart ({elementsInCart})</Link>
            </div>

            <Navbar/>

            <main className="mx-5">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}></Route>
                    <Route path="/products/:id" element={<ProductDetail/>}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App
