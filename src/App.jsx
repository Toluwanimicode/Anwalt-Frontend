import './App.css'
import Carousel1 from './components/Carousel/Carousel'
import About from './components/Pages/AboutUs/About';
import Client from './components/Pages/Clients/Client';
import Contact from './components/Pages/Contact/Contact';
import Home from './components/Pages/Home/Home'
import Team from './components/Pages/Our-Team/Team';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './components/Pages/Services/Services';


function App() {
  
  return (
    <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About/>} />
              <Route path="/client" element={<Client/>} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
