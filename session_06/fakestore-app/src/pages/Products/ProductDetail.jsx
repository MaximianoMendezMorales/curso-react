import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/firestore/useProducts.js";
import { useEffect } from "react";
import AddProduct from "../../components/Cart/AddProduct.jsx";

const ProductDetail = () => {
    const { id } = useParams();
    const { getProductById, product, loading } = useProducts();

    useEffect(() => {
        (async () => await getProductById(id))();
    }, [ id ]);

    const Product = () => {
        return (
            <>
                <pre>{JSON.stringify(product, null, 2)}</pre>
                <div className="flex">
                    <AddProduct product={product}/>
                </div>
            </>
        )
    }

    return (
        <>
            <p>Product Detail: {id}</p>
            {
                loading
                    ? ('log')
                    : (<Product/>)
            }
        </>
    )
}

export default ProductDetail;