import { useAuth } from "../hooks/auth/useAuth.js";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Auth = ({ children }) => {
    const { user, loadingSession } = useAuth();

    if (loadingSession) return (<p>Loading...</p>)

    if (loadingSession && !user) {
        return <Navigate to="/login" replace={ true }/>
    }

    return children;
}

export default Auth;