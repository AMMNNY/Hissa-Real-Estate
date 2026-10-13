import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/images/Logo.png" alt="Logo" />
      </Link>

      <div className="navbar-links">
        <Link to="/properties">Browse Properties</Link>
        <Link to="/portfolio">Investor Portfolio</Link>
      </div>

      <div className="navbar-actions">
        <Link to="/login" className="login-link">Login</Link>
        <Link to="/signup" className="signup-link">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;

