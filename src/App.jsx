import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import { useFavorites } from './hooks/useFavorites';
import Navbar from './components/Navbars';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorites';
import Footer from "./components/Footer";
import './App.css'


export const FavoritesContext = createContext();

function App() {
  const favorites = useFavorites();

  return (
    <FavoritesContext.Provider value={favorites}>
      <Router>
        <div className="min-h-screen bg-gray-100 flex">
          <Navbar favoritesCount={favorites.length} />
          
         
          <div className="flex-1 flex flex-col min-w-0">
            <main className="flex-1 p-4 lg:ml-72">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </FavoritesContext.Provider>
  );
}


function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Page not found</p>
        <a
          href="/"
          className="text-blue-600 hover:text-blue-800 text-lg font-medium"
        >
          Go back home →
        </a>
      </div>
    </div>
  );
}

export default App;