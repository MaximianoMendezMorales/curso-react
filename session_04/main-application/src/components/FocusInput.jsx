import {useRef, useState} from "react";

const FocusInput = () => {
    const inputOne = useRef(null)
    const inputTwo = useRef(null)
    const [values, setValues] = useState([])

    const focus = ({current}) => {
        console.log(current.value)
    }

    return (
        <div className="flex p-8 gap-4">
            <div>
                <input type="text" ref={inputOne}/>
                <button onClick={() => focus(inputOne)}>Focus</button>
            </div>
            <div>
                <input type="text" ref={inputTwo}/>
                <button type="button" onClick={() => focus(inputTwo)}>Focus</button>
            </div>
            <div>
                <button className="btn btn-blue" onClick={() => {
                    setValues([{v1: inputOne.current.value, v2: inputTwo.current.value}, ...values])
                }}>Add</button>
            </div>

            <hr/>

            <div>
                <ul>{values.map((v, index) => <li key={index}>{v.v1} - {v.v2}</li>)}</ul>
            </div>
        </div>
    )
}

export default FocusInput