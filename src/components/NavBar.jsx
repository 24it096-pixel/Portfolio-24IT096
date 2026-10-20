import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="logo-link">
            Portfolio
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={location.pathname === '/projects' ? 'active-link' : ''}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'active-link' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
