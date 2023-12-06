import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth/useAuth.js";

const Login = () => {
    const [ error, setError ] = useState("");
    const [ form, setForm ] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();
    const { authenticate, user, loadingSession } = useAuth();

    if (!loadingSession && user) {
        return <Navigate to="/" replace={ true }/>
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [ e.target.name ]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await authenticate(form)
            navigate("/")
        } catch (e) {
            setError(e.message)
        }
    }

    return (
        <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                { error ? <span className="text-red-600">{ error }</span> : null }
                <form className="space-y-6" onSubmit={ (e) => handleSubmit(e) }>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autoComplete="email" onChange={ handleChange } required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" autoComplete="current-password" onChange={ handleChange } required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                </form>
            </div>
            {/*<div>*/}
            {/*    <h1>Login</h1>*/}
            {/*    {  }*/}
            {/*    <form onSubmit={ (event) => handleSubmit(event) }>*/}
            {/*        <input type="email" name="email" onChange={ handleChange } placeholder="E-mail"/>*/}
            {/*        <input type="password" name="password" onChange={ handleChange } placeholder="Pasword"/>*/}
            {/*        <button type="submit">*/}
            {/*            Login*/}
            {/*        </button>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </div>
    )
}

export default Login;