import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="content-container not-found-page">
      <div className="not-found-card">
        <h1 className="not-found-code">404</h1>
        <h2 className="section-title">Page Not Found</h2>
        <p className="not-found-text">
          The requested page does not exist or has been moved.
        </p>
        <Link to="/" className="back-home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
