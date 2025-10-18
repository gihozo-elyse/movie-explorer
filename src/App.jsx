import './App.css'
import Footer from './Footer'
import Home from './pages/Home'
import About from './About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex-1 flex flex-col lg:ml-64">
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
