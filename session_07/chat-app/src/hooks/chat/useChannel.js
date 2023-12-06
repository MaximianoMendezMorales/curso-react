import { query, collection, orderBy, onSnapshot, arrayUnion, arrayRemove, doc } from "firebase/firestore";
import { firestore } from "../../main.jsx";
import { useState } from "react";

export const useChannel = () => {
    const [ channels, setChannels ] = useState([])
    const getChannels = async () => {
        try {
            const q = await query(collection(firestore, "channels"), orderBy('name'));
            onSnapshot(q, (querySnapshot) => {
                setChannels(querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                })))
            })
        } catch (e) {
            console.log(e)
        }
    }

    const getChannelByDoc = (channelId) => {
        return doc(firestore, "channels", channelId);
    }

    const joinToChannel = async (channelId, recipient) => {
        const reference = await getChannelByDoc(channelId);

        await reference.update({
            recipients: arrayUnion(recipient)
        })
    }

    const kickoffFromChannel = async (channelId, recipient) => {
        const reference = await getChannelByDoc(channelId);

        await reference.update({
            recipients: arrayRemove(recipient)
        })
    }

    return {
        channels,
        getChannels,
        joinToChannel,
        kickoffFromChannel,
        getChannelByDoc
    }
}