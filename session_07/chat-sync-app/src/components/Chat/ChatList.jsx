import { useChannel } from "../../hooks/chat/useChannel.js";
import { useEffect, useState } from "react";
import { useChannelMessage } from "../../hooks/chat/useChannelMessage.js";
import ChatMessage from "../../dto/chat/message.js";
import { useAuth } from "../../hooks/useAuth.js";
import { DateTime } from "luxon";

const ChatList = () => {
    const { channels, getChannels, loading: loadingChannels } = useChannel();
    const { messages, getMessagesByChannel, sendMessage } = useChannelMessage();
    const { user } = useAuth();

    const [ channel, setChannel ] = useState(null);

    useEffect(() => {
        (async () => await getChannels())();
    }, [])

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
        }
    }

    const convertToDate = (isoDatetime) => {
        const d = DateTime.fromISO(isoDatetime);
        return d.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS).toString();
    }

    const MessageInput = () => {
        return (
            <>
                <label htmlFor="input-message"></label>
                <input type="text" name="input-message" id="input-message" onKeyDown={ onSendMessageEnter } placeholder="Type message..."/>
            </>
        )
    }

    return (
        <>
            <div>
                <div>
                    {
                        loadingChannels
                            ? (<p>Loading...</p>)
                            : null
                    }
                </div>
            </div>
            <ul>
                {
                    channels.map((channel) => (
                        <li key={ channel.id }>
                            <button type="button" onClick={ () => onSelectChannelClicked(channel) }>{ channel.name.toString() }</button>
                        </li>
                    ))
                }
            </ul>

            <div>
                { channel ? ( <p>{ `${ channel.name.toString() }: ${ channel.topic.toString() }` }</p> ) : null }
                {
                    messages.length
                        ? (
                            <ul>
                                {
                                    messages.map(m => (
                                        <li className="flex content-between align-middle" key={m.id} style={ {
                                            color: user.uid === m.author.uid ? 'blue' : 'red'
                                        } }>
                                            <span>{ m.content.toString() }</span>
                                            <small>{ m.author.name }</small> - { convertToDate(m.timestamp) }
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                        : null
                }
                <hr/>
                {
                    channel
                        ? ( <MessageInput/> )
                        : null
                }
            </div>
        </>
    )
}

export default ChatList