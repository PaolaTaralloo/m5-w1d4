import { useState } from 'react'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'
import WelcomeAlertComp from './components/WelcomeAlertComp'
import AllTheBooksComp from './components/AllTheBooksComp'

function App() {
   const [search, setSearch] = useState ('')
  
    const handleSearch = (event) => {
      setSearch (event.target.value)
    }

  return (
    <>
      <NavbarComponent search={search} handleSearch ={handleSearch} />
      <WelcomeAlertComp />
      <AllTheBooksComp search = {search}/>
      <FooterComponent />
    </>

  )
}

export default App
