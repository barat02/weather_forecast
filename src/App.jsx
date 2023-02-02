import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Content />
    </div>
  )
}

export default App
