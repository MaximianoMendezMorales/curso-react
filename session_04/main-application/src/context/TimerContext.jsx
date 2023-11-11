import {createContext, useContext, useEffect, useState} from "react";

const TimerContext = createContext();

export const useTimeContext = () => useContext(TimerContext)

export const TimerProvider = ({children}) => {
    const [seconds, setSeconds] = useState(0)
    const [formattedTime, setFormattedTime] = useState("00:00:00")

    const reset = () => {
        setSeconds(0)
        setFormattedTime('00:00:00')
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((seconds) => seconds + 1);
        }, 1000)

        return () => clearInterval(interval)
    }, []);

    useEffect(() => {
        const hrs = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60)
        const secondsLeft = Math.floor(seconds % 60)

        setFormattedTime(`${hrs.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`)
    }, [seconds])

    return (
        <TimerContext.Provider value={{time: formattedTime, reset}} children={children}/>
    )
}