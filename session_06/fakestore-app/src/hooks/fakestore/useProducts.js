import { useState } from "react";
import { apiStore } from "../../boot/axios.js";

export const useProducts = () => {
    const [ products, setProducts ] = useState([])
    const [ product, setProduct ] = useState({});
    const [ loading, setLoading ] = useState(false)

    const getProducts = async () => {
        setLoading(true)
        try {
            const { data } = await apiStore.get('/products')
            setProducts(data)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    const getProductById = async (id) => {
        setLoading(true)
        try {
            const { data } = await apiStore.get(`/products/${id}`)
            setProduct(data)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    return {
        getProducts,
        products,
        getProductById,
        product,
        loading
    }
}