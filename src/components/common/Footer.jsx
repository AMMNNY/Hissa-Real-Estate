import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/images/Logo.png" alt="Logo" />
          </Link>
          <p>
            Making real estate investment accessible to everyone,
            one share at a time.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <Link to="/properties">Browse Properties</Link>
          <Link to="/portfolio">Investor Portfolio</Link>
        </div>

        <div className="footer-links">
          <h3>Account</h3>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Real Estate Investment Platform</p>
        <p>Made for smarter investing.</p>
      </div>
    </footer>
  );
}

export default Footer;