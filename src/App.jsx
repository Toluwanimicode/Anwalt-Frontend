import './App.css'
import Carousel1 from './components/Carousel/Carousel'
import About from './components/Pages/AboutUs/About';
import Home from './components/Pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About/>} />
          </Routes>
        </BrowserRouter>

      <Carousel1 />
      <Home />
    </>
  )
}

export default App
