import AppLayout from "../layouts/AppLayout.jsx";
import { useChannelMessage } from "../hooks/chat/useChannelMessage.js";
import { useAuth } from "../hooks/useAuth.js";
import { useChannel } from "../hooks/chat/useChannel.js";
import { useEffect, useState } from "react";
import ChatMessage from "../dto/chat/message.js";
import { DateTime } from "luxon";

const Dashboard = () => {
    const { messages, getMessagesByChannel, sendMessage } = useChannelMessage();
    const { channels, getChannels, loading: loadingChannels } = useChannel();
    const { user } = useAuth();

    const [ channel, setChannel ] = useState(null);

    useEffect(() => {
        (async () => await getChannels())();
    }, []);

    const onSelectChannelClicked = async (channel) => {
        setChannel(channel)
        try {
            await getMessagesByChannel(channel.id)
        } catch (e) {
            console.log(e)
        }
    }

    const onSendMessageEnter = async ({ key, target }) => {
        if (key === 'Enter') {
            await sendMessage(
                new ChatMessage(
                    target.value.toString(),
                    channel
                ),
                user
            )
            target.value = ""
        }
    }

    const convertToDate = (isoDatetime) => {
        const d = DateTime.fromISO(isoDatetime);
        return d.toLocaleString(DateTime.DATETIME_MED).toString();
    }

    function getRandomColorClass() {
        const colors = [
            'text-red-200',
            'text-blue-200',
            'text-green-200',
            'text-yellow-200',
            'text-indigo-200',
            'text-purple-200',
            'text-pink-200'
        ];

        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    const MessageInput = () => {
        return (
            <>
                <input type="text" name="message-input" id="message-input" placeholder="Type a message..."
                    onKeyDown={onSendMessageEnter}
                />
            </>
        )
    }

    return (
        <AppLayout>
            <div className="px-52 flex max-h-fit">
                <div className="w-1/3">
                    <div className="">
                        <ul className="w-96">
                            {
                                channels.map((c) => (
                                    <li key={ c.id } className="w-full p-4">
                                        <button type="button" className={`${c.id === channel?.id ? 'bg-green-600' : ''}`} onClick={ () => onSelectChannelClicked(c) }>{ c.name.toString() }</button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="w-2/3 bg-gray-600 border-2 border-gray-400 rounded max-h-fit">
                    <div className="">
                        <div className="flex flex-col mb-4 w-full p-5">
                            {
                                channel
                                    ? (
                                        <div className="my-3">
                                            <h1 className="text-white">{ channel?.topic }</h1>
                                            <hr className="bg-white"/>
                                        </div>
                                    )
                                    : null
                            }
                            {messages.map((message, index) => (
                                <div key={index} className={`mb-2 ${message.author.uid === user.uid ? 'text-right' : 'text-left'}`}>
                                    <p className="text-sm">
                                        <span className={ getRandomColorClass() }>{ message.author.name.toString() }</span>
                                        <small className="ml-3 text-gray-400">
                                            { convertToDate(message.timestamp) }
                                        </small>
                                    </p>
                                    <span
                                        className="inline-block text-sm text-gray-50"
                                    >
                                                {message.content}
                                              </span>
                                </div>
                            ))}

                            {
                                channel
                                    ? (<MessageInput/>)
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard