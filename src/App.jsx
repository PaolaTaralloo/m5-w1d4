import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'
import { ThemeContext } from './modules/context'
import Homepage from './pages/Homepage'
import Errorpage from './pages/Errorpage'

function App() {
  const [search, setSearch] = useState('')
  const [theme, setTheme] = useState('light')

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={[theme, setTheme]}>
          <NavbarComponent search={search} handleSearch={handleSearch} />
          <Routes>
            <Route path='/' element={<Homepage search= {search} />} />
            <Route path='*' element={<Errorpage />} />
          </Routes>
          <Homepage search= {search} />
          <FooterComponent />
        </ThemeContext.Provider>


      </BrowserRouter>
    </>

  )
}

export default App
