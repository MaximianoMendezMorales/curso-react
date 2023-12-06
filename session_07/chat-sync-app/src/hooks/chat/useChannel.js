import { useState } from "react";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { firestore } from "../../main.jsx";

export const useChannel = () => {
    const [ channels, setChannels ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const getChannels = async () => {
        setLoading(true)
        try {
            const q = await query(collection(firestore, "channels"), orderBy('name'));

            onSnapshot(q, (queryString) => {
                setChannels(queryString.docs.map(doc => ( {
                    id: doc.id,
                    ...doc.data()
                } )))
            });
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    return {
        channels,
        getChannels,
        loading
    }
}
