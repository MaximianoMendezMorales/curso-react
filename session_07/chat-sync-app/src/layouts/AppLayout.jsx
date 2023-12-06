import Navbar from "../components/Navbar.jsx";

const AppLayout = ({ children }) => {
    return (
        <>
            <div className="bg-gray-500 h-screen">
                <Navbar/>
                <main className="max-h-full">
                    { children }
                </main>
            </div>
        </>
    )
}

export default AppLayout