import {useState} from "react";

const ControlledComponent = () => {
    const [inputValue, setInputValue] = useState("")
    const [values, setValues] = useState([])

    const addElement = () => {
        setValues([...values, inputValue])
        setInputValue("")
    }

    return (
        <>
            <div className="p-8 gap-4">
                <input type="text" value={inputValue} onChange={(event) => {
                    setInputValue(event.target.value)
                }}/>

                <button className="btn btn-blue" onClick={addElement}>Add</button>

                <div>
                    <ul>
                        {values.map((value, index) => <li key={index}>{value}</li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ControlledComponent