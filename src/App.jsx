import { Outlet } from 'react-router'
import './App.css'
import NavBar from './Components/navBar'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <NavBar />
      <Outlet  />
      <Footer />
    </>
  )
}

export default App
