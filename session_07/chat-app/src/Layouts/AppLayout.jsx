import Navbar from "../components/Navbar.jsx";

// eslint-disable-next-line react/prop-types
const AppLayout = ({ children }) => {
    return (
        <>
            <Navbar/>
            <main>
                { children }
            </main>
        </>
    )
}

export default AppLayout;