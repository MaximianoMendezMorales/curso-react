import { useState } from "react";
import { collection, onSnapshot, query, where, addDoc} from "firebase/firestore";
import { orderBy } from 'lodash';
import { firestore } from "../../main.jsx";

export const useChannelMessage = () => {
    const [ messages, setMessages ] = useState([]);

    const getMessagesByChannel = (channelId) => {
        try {
            const q = query(collection(firestore, "messages"),
                where("channel_id", "==", channelId),
            );

            onSnapshot(q, (queryString) => {
                setMessages(orderBy(queryString.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                })), 'timestamp', 'asc'))
            });
        } catch (e) {
            console.log(e)
        }
    }

    /**
     * Send a message to chat room
     *
     * @param {ChatMessage} message
     * @param {UserCredential.user} user
     * @returns {Promise<void>}
     */
    const sendMessage = async (message, user) => {
        try {
            const messagesRef = collection(firestore, 'messages');

            return await addDoc(messagesRef, {
                timestamp: new Date().toISOString(),
                content: message.content,
                type: 1,
                author: {
                    name: user.email.toString(),
                    uid: user.uid
                },
                channel_id: message.channel.id
            })
        } catch (e) {
            console.log(e)
        }
    }

    return {
        getMessagesByChannel,
        sendMessage,
        messages
    }
}