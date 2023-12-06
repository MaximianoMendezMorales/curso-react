import { useMessage } from "../../hooks/chat/useMessage.js";

// eslint-disable-next-line react/prop-types
const InputMessage = ({ channelId }) => {
    const { sendMessage } = useMessage();

    const handleKeyup = async (e) => {
        if (e.key === 'Enter') {
            // await sendMessage({
            //     content: e.target.value
            // }, channelId)

            e.target.value = ''
        }
    }

    return (
        <input type="text" className="w-full" onKeyUp={handleKeyup}/>
    )
}

export default InputMessage;