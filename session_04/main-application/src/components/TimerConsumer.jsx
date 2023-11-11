import {useTimeContext} from "../context/TimerContext.jsx";

const TimerConsumer = () => {
    const { time, reset } = useTimeContext()

    return (
        <div className="p-4">
            <h1>Timer Consume: {time}</h1>
            <button className="btn btn-blue" onClick={reset}>Reset</button>
        </div>
    )
}

export default TimerConsumer