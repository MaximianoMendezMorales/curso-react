import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/dashboard" element={ <Dashboard/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
