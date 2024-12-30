import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="container mt-5">
      <div className="card">
        <Header/>
      </div>
    </div>
    
  )
}

export default App
