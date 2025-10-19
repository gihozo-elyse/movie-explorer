import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home.jsx"
import Products  from './pages/Products.jsx'

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
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
