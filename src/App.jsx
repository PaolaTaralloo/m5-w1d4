import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'
import WelcomeAlertComp from './components/WelcomeAlertComp'
import AllTheBooksComp from './components/AllTheBooksComp'



function App() {


  return (
    <>
      <NavbarComponent />
      <WelcomeAlertComp />
      <AllTheBooksComp />
      <FooterComponent />
    </>

  )
}

export default App
