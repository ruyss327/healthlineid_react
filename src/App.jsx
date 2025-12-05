import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar baru kita
import Home from './pages/Home';
import Tips from './pages/Tips';
import Lifestyle from './pages/Lifestyle';
import Login from './pages/Login';

// Kita tidak butuh './App.css' lagi karena sudah pakai Tailwind di index.css

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen font-sans">
        {/* Navbar ditaruh di sini agar muncul di SEMUA halaman */}
        <Navbar />

        {/* Ini area konten yang berubah-ubah sesuai halaman */}
        <div className="pt-4"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;