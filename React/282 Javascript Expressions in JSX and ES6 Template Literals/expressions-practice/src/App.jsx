import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = "Anıl";
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div>
        <p>Created by {name}</p>
        <p>Copyright {year}</p>
      </div>
    </>
  )
}

export default App
