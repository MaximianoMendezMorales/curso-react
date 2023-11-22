import {useEffect, useState} from "react";
import { useProducts } from "../hooks/fakestore/useProducts.js";
import Product from "./Products/Product.jsx";

const Home = () => {
    const { data: products, getProducts } = useProducts()

    useEffect(() => {
        (async () => await getProducts())();
    }, []);

    return (
        <div className="">
            <p>Products: {products === null ? 0 : products.length}</p>
            <hr/>
            <div>
                <ul>
                    {
                        products === null
                            ? ('No products')
                            : (
                                products.map((product) => (
                                    <Product product={product} key={product.id}/>
                                ))
                            )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Home