import { useState } from "react";
import { collection, onSnapshot, query, where, Timestamp, addDoc } from "firebase/firestore";
import { firestore } from "../../main.jsx";

export const useMessage = () => {
    const [ messages, setMessages ] = useState([]);

    const getMessages = async (channelId) => {
        try {

            const q = await query(
                collection(firestore, "messages"),
                where('channel_id', '==', channelId),
                // orderBy('timestamp')
            );

            onSnapshot(q, (querySnapshot) => {
                setMessages(querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                })))
            })
        } catch (e) {
            console.log(e)
        }
    }

    const sendMessage = async ({ content }, channelId) => {
        const messages = collection(firestore, 'messages');

        await addDoc(messages, {
            content: content,
            type: 1,
            timestamp: Timestamp.now(),
            author: {
                name: 'Max',
                uid: 1
            },
            channel_id: channelId
        })
    }

    return { getMessages, messages, sendMessage }
}