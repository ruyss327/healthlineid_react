import { Link } from 'react-router-dom';
import './Navbar.css';

// Menerima prop 'activePage' untuk menandai link yang aktif
const Navbar = ({ activePage }) => {
    // Fungsi bantuan untuk menentukan kelas aktif
    const isActive = (page) => (activePage === page ? 'active' : ''); 

    return (
        <nav className="navbar">
            <div className="container">
                {/* Asumsi: logo menggunakan styling dari .logo di Navbar.css */}
                <Link className="logo" to="/">HealthLineID</Link>
                <div className="nav-links">
                    {/* Menggunakan isActive() untuk menentukan kelas */}
                    <Link to="/" className={isActive('beranda')}>Beranda</Link>
                    <Link to="/tips" className={isActive('tips')}>Tips Kesehatan</Link>
                    <Link to="/lifestyle" className={isActive('lifestyle')}>Gaya Hidup Sehat</Link>
                    <Link to="/login" className={isActive('login')}>Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
