// import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/Navbar'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
