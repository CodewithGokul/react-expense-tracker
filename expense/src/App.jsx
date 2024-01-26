import { useState } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import Incomeexp from './components/Incomeexp'
import History from './components/History'
import Newtrans from './components/Newtrans'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Balance/>
     <Incomeexp/>
     <History/>
     <Newtrans/>
      
    </>
  )
}

export default App
