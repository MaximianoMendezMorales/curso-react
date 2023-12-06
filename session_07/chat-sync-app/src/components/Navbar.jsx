import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

const Navbar = () => {
    const { user, logout, loading: loadingUser } = useAuth();
    const navigate = useNavigate();

    const onLogoutClicked = async () => {
        await logout();
        navigate('/login');
    }

    const LogoutForm = () => {
        return (
            <div>
                <div>{ user.email }</div>
                <button onClick={ onLogoutClicked }>Logout</button>
            </div>
        )
    }

    return (
        <nav>
            <Link to="/dashboard">Dashboard</Link>
            {
                user
                    ? (<LogoutForm/>)
                    : (<Link to="/login">Login</Link>)
            }
        </nav>
    )
}

export default Navbar