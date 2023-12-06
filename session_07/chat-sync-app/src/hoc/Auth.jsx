import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

const Auth = ({ children }) => {
    const { user, loading: loadingSession } = useAuth();

    if (loadingSession) return ( <h1>Loading...</h1> )

    if (!loadingSession && !user) {
        return <Navigate to="/login" replace={ true }/>
    }

    return children;
}

export default Auth;