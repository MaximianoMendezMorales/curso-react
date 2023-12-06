import AppLayout from "../Layouts/AppLayout.jsx";
import { useChannel } from "../hooks/chat/useChannel.js";
import { useEffect, useState } from "react";
import { useMessage } from "../hooks/chat/useMessage.js";

const Dashboard = () => {
    const { getChannels, channels } = useChannel();
    const { getMessages, messages } = useMessage();
    const [ channel, setChannel ] = useState(null)

    useEffect(() => {
        (async () => await getChannels())()
    }, []);

    const handleClick = (c) => {
        console.log(c)
        setChannel(c)
        // setChannel(channel);
    }

    return (
        <AppLayout>
            <div>
                {
                    channels.map((channel) => (
                        <button type="button" onClick={() => handleClick(channel)} key={ channel.id }>Join
                            to: { channel.name.toString().toUpperCase() }</button>
                    ))
                }

                <pre>{ channel }</pre>
            </div>
        </AppLayout>
    )
}

export default Dashboard