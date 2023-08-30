import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { hola } from './Test';


function App() {
  const [count, setCount] = useState(0);
  return (
    
    <div className="App">
      INDEX hola
      <button onClick={hola}>soy el boton</button>
    </div>
  )
}

export default App
