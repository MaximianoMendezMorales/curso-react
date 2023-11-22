import {apiStore} from "../../boot/axios.js";
import {useState} from "react";

export const useProducts = () => {
    const [data, setData] = useState(null)
    const getProducts = async () => {
        try {
            const { data } = await apiStore.get('/products')
            setData(data)
        } catch (e) {
            console.log(e)
        }
    }

    return {
        getProducts,
        data
    }
}