import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice.js";

// eslint-disable-next-line react/prop-types
const RemoveProduct = ({ product }) => {
    const dispatch = useDispatch();
    const handleRemoveFromCart = () => {
        // eslint-disable-next-line react/prop-types
        if (confirm(`¿Are you sure to remove ${ product.title.toString() } from your cart?`)) {
            // eslint-disable-next-line react/prop-types
            dispatch(removeFromCart(product.id));
        }
    }

    return (
        <button type="button" className="btn btn-danger" onClick={ () => handleRemoveFromCart() }>Remove</button>
    )
}

export default RemoveProduct;