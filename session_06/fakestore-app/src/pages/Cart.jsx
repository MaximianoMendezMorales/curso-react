import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProductItem from "../components/Products/ProductItem.jsx";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [ grandTotal, setGrandTotal ] = useState(0);

    useEffect(() => {
        setGrandTotal(cart.reduce((acc, { price }) => acc + price, 0))
    }, [ cart ]);

    return (
        <>
            {
                isEmpty(cart)
                    ? (<p>Your cart is empty</p>)
                    : (
                        <ul>
                            {
                                cart.map((product) => (
                                    <ProductItem product={product} key={product.id}></ProductItem>
                                ))
                            }
                        </ul>
                    )
            }
            <hr/>
            <p>{grandTotal.toFixed(2)}</p>
            <hr/>
            <Link to="/">
                ...or Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
            </Link>
        </>
    )
}

export default Cart;