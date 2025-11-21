import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="logo" to="/">HealthLineID</Link>
        <div className="nav-links">
          <Link to="/" className="active">Beranda</Link>
          <Link to="/tips">Tips Kesehatan</Link>
          <Link to="/lifestyle">Gaya Hidup Sehat</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
