import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DetailLink = ({ product }) => {
    return (
        // eslint-disable-next-line react/prop-types
        <Link to={`/products/${product.id}`} target="_self" className="text-sm hover:underline hover:text-blue-800">{product.title.toString()}</Link>
    )
}

export default DetailLink;