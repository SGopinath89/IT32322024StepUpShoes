import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Women from './pages/Women'
import Men from './pages/Men'
import Kids from './pages/Kids'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <div className='app'>
          <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/Women' element={<Women/>}></Route>
              <Route path='/Men' element={<Men/>}></Route>
              <Route path='/Kids' element={<Kids/>}></Route>
            </Routes>
        </div>
    <Footer></Footer>
    </>
    
  )
}

export default App