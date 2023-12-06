import { useEffect, useState } from "react";
import ProductItem from "../components/Products/ProductItem.jsx";
import { useProducts } from "../hooks/firestore/useProducts.js";

const Home = () => {
    const { getProducts, products, loading } = useProducts();
    const [ searchTerm, setSearchTerm ] = useState('')

    useEffect(() => {
        (async () => await getProducts())();
    }, []);

    const handleSearchProducts = (search) => {
        setSearchTerm(search)
    }

    const filteredProducts = products.filter((product) =>
        product.title.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <>
            <div className="mt-8">
                <div className="my-5">
                    <input type="search" value={searchTerm} disabled={loading} onChange={({ target }) => handleSearchProducts(target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {
                            filteredProducts.map((product) => (
                                <ProductItem product={product} key={product.id}/>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home;