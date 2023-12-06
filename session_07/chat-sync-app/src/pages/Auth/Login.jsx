import { useState } from "react";
import { useAuth } from "../../hooks/useAuth.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const appName = import.meta.env.VITE_APP_NAME;

    const [ error, setError ] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const [ credentials, setCredentials ] = useState({
        email: "",
        password: ""
    });

    const handleChange = ({ target }) => {
        setCredentials({
            ...credentials,
            [ target.name ]: target.value
        })
    }

    const onLoginSubmitted = async (e) => {
        e.preventDefault()

        setError("")

        try {
            await login(credentials)
            navigate('/dashboard')
        } catch (error) {
            setError(error.message ?? "An error has occurred.")
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center align-middle px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        { appName.toString() }
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={ onLoginSubmitted }>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Correo Electrónico:
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    onChange={ handleChange }
                                    className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Contraseña:
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    onChange={ handleChange }
                                    className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
        // <>
        //     <h1>Log In</h1>
        //     <div>
        //         {
        //             error
        //                 ? ( <span className="text-red-600">{ error }</span> )
        //                 : null
        //         }
        //         <form onSubmit={ onLoginSubmitted }>
        //             <div>
        //                 <label htmlFor="email">Email:</label>
        //                 <input type="email" name="email" id="email" onChange={ handleChange }/>
        //             </div>
        //             <div>
        //                 <label htmlFor="password">Password:</label>
        //                 <input type="password" name="password" id="password" onChange={ handleChange }/>
        //             </div>
        //             <button type="submit">Send</button>
        //         </form>
        //     </div>
        // </>
    )
}

export default Login