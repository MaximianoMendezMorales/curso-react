// eslint-disable-next-line react/prop-types
import AddProduct from "../Cart/AddProduct.jsx";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductItem = ({ product }) => {
    return (
        <>
            {/* eslint-disable-next-line react/prop-types */}
            <p>Product Item: {product.title}</p>
            <div>
                <AddProduct product={product}/>
                {/* eslint-disable-next-line react/prop-types */}
                <Link to={`/products/${product.id}`} target="_self">Detail</Link>
            </div>
        </>
    )
}

export default ProductItem;

