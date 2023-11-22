import {useCartContext} from "../context/CartContext.jsx";
import Product from "./Products/Product.jsx";
import {isEmpty} from "lodash";
import {useEffect, useState} from "react";

const Cart = () => {
    const {state: {cart}} = useCartContext()
    const [total, setTotal] = useState(0)

    // useEffect(() => {
    //     setTotal()
    // }, [cart]);
    //
    return (
        <div>
            <h1 className="font-bold">MY CART</h1>
            {
                isEmpty(cart)
                    ? ('no products selected')
                    : (
                        <ul>
                            {
                                cart.map(product => (
                                    <Product product={product} key={product.id} />)
                                )
                            }
                        </ul>
                    )
            }
        </div>
    )
}

export default Cart