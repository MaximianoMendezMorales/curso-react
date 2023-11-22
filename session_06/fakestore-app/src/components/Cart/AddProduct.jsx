import { addToCart } from "../../redux/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import RemoveProduct from "./RemoveProduct.jsx";

// eslint-disable-next-line react/prop-types
const AddProduct = ({ product }) => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    // eslint-disable-next-line react/prop-types
    const productExistsInCart = () => cart.some(productInCart => productInCart.id === product.id);

    const handleAddToCart = () => {
        // eslint-disable-next-line react/prop-types
        if (confirm(`¿Are you wish to add: ${product.title.toString()} to your cart?`)) {
            dispatch(addToCart(product));
        }
    }

    return (
        <>
            {
                productExistsInCart()
                    ? (<RemoveProduct product={product}/>)
                    : (
                        <button type="button" className="text-amber-600" onClick={() => handleAddToCart()}>
                            Add to Cart
                        </button>
                    )
            }
        </>
    )
}

export default AddProduct;