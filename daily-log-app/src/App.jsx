import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppLayout from './components/AppLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <AppLayout>
        <h1>안녕</h1>
      </AppLayout>
    </>
  )
}

export default App
