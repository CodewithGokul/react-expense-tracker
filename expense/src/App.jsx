import { useState } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import Incomeexp from './components/Incomeexp'
import History from './components/History'
import Newtrans from './components/Newtrans'
import { GlobalProvider } from './context/Globalstate'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalProvider>
     <Header/>
     <Balance/>
     <Incomeexp/>
     <History/>
     <Newtrans/>
     </GlobalProvider>
      
    </>
  )
}

export default App
