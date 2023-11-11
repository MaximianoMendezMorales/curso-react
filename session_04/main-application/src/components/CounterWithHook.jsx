import {useCounter} from "../hooks/useCounter.js";

const CounterWithHook = () => {
    const { counter, reset, decrement, increment } = useCounter()

    return (
        <div className="p-8 flex flex-col items-center justify-content">
            <h1 className="text-2xl font-bold">Counter With Hook</h1>

            <h5 className="py-6 font-bold">Count: {counter}</h5>

            <div className="flex gap-2">
                <button className="btn btn-blue" onClick={increment}>Increment</button>
                <button className="btn btn-blue" onClick={decrement}>Decrement</button>
                <button className="btn btn-blue" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default CounterWithHook