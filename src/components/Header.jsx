function Header({ name }) {
  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="logo">Portfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

      <div id="home" className="hero-section">
        <h1 className="hero-title">Hi, I'm {name}</h1>
        <p className="hero-subtitle">
          A passionate student developer building interactive and modern web experiences.
        </p>
      </div>
    </header>
  );
}

export default Header;
