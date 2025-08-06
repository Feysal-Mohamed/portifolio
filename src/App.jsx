// import { useState } from 'react'
import Header from './head'
// import Events from './components/events'
import { Route, Routes } from 'react-router-dom'
import Page from './pages/Page'
import Contact from './pages/contact'
import About from './pages/about'
import Eventspage from './components/eventspage'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Page />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path="/events" element={<Eventspage />}/>
        
      </Routes>
      
      
    
    
   
    </>
  )
}

export default App
