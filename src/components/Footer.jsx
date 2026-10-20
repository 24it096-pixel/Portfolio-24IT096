function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Student 24IT096. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
