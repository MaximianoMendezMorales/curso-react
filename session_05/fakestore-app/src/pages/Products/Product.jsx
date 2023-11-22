import {useCartContext} from "../../context/CartContext.jsx";
import {useLocation} from "react-router-dom";

const Product = ({product}) => {
    const {dispatch} = useCartContext()
    const {pathname} = useLocation()

    const addToCart = () => {
        dispatch({type: 'ADD_TO_CART', payload: product})
        alert(`Product ${product.title.toString()} added.`)
    }

    const removeFromCart = () => {
        dispatch({type: 'REMOVE_FROM_CART', payload: product.id})
        alert(`Product ${product.title.toString()} removed.`)
    }

    return (
        <li>
            {product.title.toString().toUpperCase()}
            <br/>
            {
                pathname === '/cart'
                    ? (
                        <button type="button" onClick={() => removeFromCart()}>Remove</button>
                    )
                    : (
                        <button type="button" onClick={() => addToCart()}>Add</button>
                    )
            }
        </li>
    )
}

export default Product