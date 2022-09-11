import { useState } from 'react'

import styles from "./App.module.css"

import './global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  )
}

export default App
