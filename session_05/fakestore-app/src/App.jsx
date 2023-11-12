import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import {apiStore} from "./boot/axios.js";

function App() {
    const getData = () => {
        apiStore.get('/products').then(response => {
            console.log(response.data)
        })
    }

    getData()

    return (
        <BrowserRouter>
            <main className="min-h-screen min-w-screen bg-gray-100 flex flex-col">
                <Navbar/>
                <div className="w-full flex justify-center">
                    <div className="container flex text-white p-4">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                        </Routes>
                    </div>
                </div>
            </main>
        </BrowserRouter>
    )
}

export default App
