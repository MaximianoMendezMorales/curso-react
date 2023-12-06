import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [ credentials, setCredentials ] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(credentials)

        navigate('/dashboard')
    }

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [ e.target.name ]: e.target.value
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={handleChange}/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={handleChange}/>

                <button type="submit">Sign In</button>
            </form>
        </>
    )
}

export default Login;