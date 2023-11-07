import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [countyByTwo, setCountByTwo] = useState(0)
  const [seconds, setSeconds] = useState(0)

  // Sin dependendecias, se ejecuta en cada renderizado
  // useEffect(() => {
  //   console.log(`Renderizado en Count: ${count} y CountTwo: ${countyByTwo}`)
  // })

  // Con arreglo de dependencias vacia, se ejecuta una vez
  // useEffect(() => {
  //   console.log(`Renderizado en Count: ${count} y CountTwo: ${countyByTwo}`)
  // }, [countyByTwo])

  // ESTE CODIGO CICLA EN UN BUCLE LA APLICACION, PORQUE DENTRO
  // SE ESTA ESCUCHANDO LA VARIABLE countyByTwo Y CUANDO SE CAMBIA SU VALOR
  // SE LE SUMA 2 A count Y AHI COMIENZA A SUMARLE 1 INFINITAMENTE

  // useEffect(() => {
  //   setCountByTwo((count) => count + 2)
  // }, [countyByTwo])

  // console.log('Rendering App in every change... ')
  // console.log(`Renderizado en Count: ${count} y CountTwo: ${countyByTwo}`)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <React.Fragment>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <h3>Seconds: {seconds}</h3>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => setCountByTwo((countyByTwo) => countyByTwo + 2)}>
          count by 2 {countyByTwo}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </React.Fragment>
  )
}

export default App
