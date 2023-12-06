import { useState } from "react";
import { query, collection, orderBy, onSnapshot, where, documentId, addDoc } from "firebase/firestore";
import { firestore } from "../../main.jsx";

export const useProducts = () => {
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ product, setProduct ] = useState(null);

    const getProducts = async () => {
        setLoading(true)
        try {
            const response = await query(collection(firestore, "products"), orderBy("title"));

            onSnapshot(response, (querySnapshot) => {
                setProducts(querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                })))
            })
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    const getProductById = async (id) => {
        setLoading(true)
        try {
            const response = await query(
                collection(firestore, "products"),
                where(documentId(), '==', id)
            );

            onSnapshot(response, (querySnapshot) => {
                setProduct(querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })))
            })
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    const storeProduct = async ({ name, price, category, image }) => {
        setLoading(true)
        try {
            const productsRef = collection(firestore, 'products');
            return await addDoc(productsRef, {
                name: name,
                category: category,
                price: parseFloat(price),
                image: image
            });
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    return {
        getProducts,
        getProductById,
        storeProduct,
        products,
        product,
        loading
    }
}