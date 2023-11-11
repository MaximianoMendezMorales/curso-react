import './App.css'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import {useState} from "react"
import Timer from "./components/Timer"
import HelloWorld from "./components/HelloWorld.jsx";
import FocusInput from "./components/FocusInput.jsx";
import ControlledComponent from "./components/ControlledComponent.jsx";
import CounterWithHook from "./components/CounterWithHook.jsx";
import TimerConsumer from "./components/TimerConsumer.jsx";

function App() {
    const [routes, setRoutes] = useState([
        {
            name: 'Timer',
            path: '/timer',
            component: <Timer/>
        },
        {
            name: 'Hello World',
            path: '/hello-world',
            component: <HelloWorld/>
        },
        {
            path: 'focus',
            name: 'Focus Input',
            component: <FocusInput/>
        },
        {
            path: "/controlled",
            name: "Controlled",
            component: <ControlledComponent/>
        },
        {
            path: 'counter-hook',
            name: 'Counter Hook',
            component: <CounterWithHook/>
        },
        {
            path: '/timer-context',
            name: 'Timer Consumer',
            component: <TimerConsumer/>
        }
    ])

    return (
        <BrowserRouter>
            <div className="min-h-[100vh] min-w-[100vw] bg-slate-200 relative">
                <nav className="absolute top-0 left-0 h-16 bg-green-300 w-full">
                    <h1>TALENTO TECH GTO</h1>
                </nav>
                <aside
                    className="absolute left-0 top-16 bg-gray-900 text-white min-w-[150px] max-w-[150px] min-h-full flex flex-col gap-2">
                    {routes.map((route, index) => (
                        <Link to={route.path} key={route.path} className="text-md">
                            {route.name.toString().toUpperCase()}
                        </Link>
                    ))}
                </aside>
                <main className="pl-[150px] pt-16">
                    <Routes>
                        {routes.map((route, index) => (
                            <Route
                                path={route.path}
                                element={route.component}
                                key={`route-${route.path}`}
                            />
                        ))}
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App
