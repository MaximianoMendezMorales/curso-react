import { BrowserRouter, Outlet, Route, Router, Routes, useRoutes } from "react-router-dom";
import React from "react";
import Dashboard from "./Pages/Dashboard.jsx";
import Login from "./Pages/Auth/Login.jsx";
import IndexPage from "./Pages/IndexPage.jsx";
import Auth from "./hoc/Auth.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <IndexPage/> }></Route>
                <Route path="/login" element={ <Login/> }></Route>
                <Route
                    element={
                        <Auth>
                            <Outlet/>
                        </Auth>
                    }
                >
                    <Route path="/dashboard" element={ <Dashboard/> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
