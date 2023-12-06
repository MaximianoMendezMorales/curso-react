import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProductItem from "../components/Products/ProductItem.jsx";
import { isEmpty } from "lodash";

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [ grandTotal, setGrandTotal ] = useState(0);

    useEffect(() => {
        setGrandTotal(cart.reduce((acc, { price }) => acc + parseFloat(price), 0));
    }, [ cart ]);

    const EmptyCart = () => {
        return (
            <p>Your cart is empty.</p>
        )
    }

    console.log(cart)

    const ProductsInCart = () => {
        return (
            <>
                <div className="mt-8">
                    <div className="grid grid-cols-12 gap-8">
                        <div className="bg-white p-4 col-span-9">
                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                    {
                                        cart.map((product) => (
                                            <ProductItem product={product} key={product.id}></ProductItem>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded shadow col-span-3">
                            <p>Contenido de la columna 2</p>
                            <div>{grandTotal}</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div>
                {
                    isEmpty(cart)
                        ? (<EmptyCart/>)
                        : (<ProductsInCart/>)
                }
                {/*<hr/>*/}
                {/*<p>{grandTotal.toFixed(2)}</p>*/}
                {/*<hr/>*/}
                {/*<Link to="/">*/}
                {/*    ...or Continue Shopping*/}
                {/*    <span aria-hidden="true"> &rarr;</span>*/}
                {/*</Link>*/}
            </div>
        </>
    )
}

export default Cart;