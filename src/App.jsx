import { useState } from 'react'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'
import WelcomeAlertComp from './components/WelcomeAlertComp'
import AllTheBooksComp from './components/AllTheBooksComp'
import { ThemeContext } from './modules/context'

function App() {
  const [search, setSearch] = useState('')
  const [ theme, setTheme ] = useState('light')

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <NavbarComponent search={search} handleSearch={handleSearch} />
        <WelcomeAlertComp />
        <AllTheBooksComp search={search} />
        <FooterComponent />
      </ThemeContext.Provider>
    </>

  )
}

export default App
