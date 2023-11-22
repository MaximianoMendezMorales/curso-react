import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/fakestore/useProducts.js";
import { useEffect } from "react";
import AddProduct from "../../components/Cart/AddProduct.jsx";

const ProductDetail = () => {
    const { id } = useParams();
    const { getProductById, product, loading } = useProducts();

    useEffect(() => {
        (async () => await getProductById(id))();
    }, [ id ]);

    return (
        <>
            {
                loading
                    ? ('loading...')
                    : (
                        <div>

                        </div>
                    )
            }
            <p>Product Detail: {id}</p>
            <pre>{JSON.stringify(product, null, 2)}</pre>
            {
                loading
                    ? null
                    : (
                        <div className="flex">
                            <AddProduct product={product}/>
                        </div>
                    )
            }
        </>
    )
}

export default ProductDetail;