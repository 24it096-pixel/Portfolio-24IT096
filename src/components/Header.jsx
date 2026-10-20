function Header({ name }) {
  return (
    <div id="home" className="hero-section">
      <h1 className="hero-title">Hi, I'm {name}</h1>
      <p className="hero-subtitle">
        A passionate student developer building interactive and modern web experiences.
      </p>
    </div>
  );
}

export default Header;
