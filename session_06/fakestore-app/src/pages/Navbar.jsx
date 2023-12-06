import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/auth/useAuth.js";

const Navbar = () => {
    const cart = useSelector(state => state.cart)
    const [ elementsInCart, setElementsInCart ] = useState(0)
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        setElementsInCart(cart.length)
    }, [ cart ]);

    const handleLogout = async () => {
        await logOut();
        navigate("/login");
    }

    const FormLogOut = () => {
        return (
            <div className="flex">
                <span>{ user.email }</span>
                <button type="button" onClick={ handleLogout }>Logout</button>
            </div>
        )
    }

    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-3 shadow">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                    </svg>
                    <span className="font-semibold text-xl tracking-tight font-mono">FakeStore App</span>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Shop</Link>
                        <Link to="/products/new" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">New Product</Link>
                    </div>
                    <div>
                        <div className="text-sm lg:flex-grow">
                            <Link to="/cart" className="inline-block text-sm font-bold px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                                Cart ({ elementsInCart })
                            </Link>
                            {
                                user
                                    ? (<FormLogOut/>)
                                    : (<Link to="/login" className="inline-block px-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Login</Link>)
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;