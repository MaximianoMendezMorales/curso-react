import { useState } from "react";
import { useProducts } from "../../hooks/firestore/useProducts.js";

const NewProduct = () => {
    const { storeProduct } = useProducts();

    const [ form, setForm ] = useState({
        name: "",
        category: "",
        price: 0,
        image: ""
    });

    const onSubmitForm = async (e) => {
        e.preventDefault()
        await storeProduct(form)
    }

    const handleChange = ({ target }) => {
        setForm({
            ...form, [ target.name ]: target.value
        });
    }

    return (
        <>
            <form onSubmit={ (event) => onSubmitForm(event) }>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={handleChange}/>

                <label htmlFor="categoty">Category:</label>
                <input type="text" name="category" id="category" onChange={handleChange}/>

                <label htmlFor="category">Price:</label>
                <input type="number" name="price" id="price" onChange={handleChange}/>


                <label htmlFor="image">Image:</label>
                <input type="text" name="image" id="image" onChange={handleChange}/>

                <button type="submit">Send</button>
            </form>
        </>
    )
}

export default NewProduct