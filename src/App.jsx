import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'
import { ThemeContext } from './modules/context'
import Homepage from './pages/Homepage'
import Detailpage from './pages/Detailpage'
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
            <Route path='/Homepage' element={<Homepage search= {search} />} />
            <Route path='/Detailpage/:asin' element={<Detailpage />} />
            <Route path='*' element={<Errorpage />} />
          </Routes>
          <FooterComponent />
        </ThemeContext.Provider>


      </BrowserRouter>
    </>

  )
}

export default App
