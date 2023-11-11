import {useReducer, useState} from "react";

export const useCounter = (initialValue = 0) => {
    // const [counter, setCounter] = useState(initialValue)
    const [counter, setCounter] = useReducer((state, action) => {
        switch (action) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            case "RESET":
                return initialValue;
            default:
                return state;
        }
    }, initialValue)

    const increment = () => setCounter('INCREMENT')

    const decrement = () => setCounter("DECREMENT")

    const reset = () => setCounter("RESET")

    return {increment, decrement, reset, counter}
}
