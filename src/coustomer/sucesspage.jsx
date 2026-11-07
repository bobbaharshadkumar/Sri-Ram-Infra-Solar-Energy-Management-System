
import { Link, useLocation } from "react-router-dom";
import "./Sucesspage.css";

function Success() {
  const location = useLocation();

  const message =
    location.state?.message ||
    "Your response has been successfully received.";

  return (
    <div className="success-page">

      <header className="success-navbar">
        <h2>
          <span>☀️ Solar Tech</span>
        </h2>
        <p>Clean Energy. Brighter Tomorrow.</p>
      </header>

      <main className="success-container">

        <div className="success-icon">✓</div>

        <h1>Submitted Successfully!</h1>

        <p className="success-description">
          Thank you for reaching out to us.
          {` ${message}`}
        </p>
        <Link to="/" className="home-button">
          ⌂ &nbsp; Back to Home →
        </Link>
        <p className="success-footer">
          Thank you for choosing SriRam Infra!
        </p>

      </main>
    </div>
  );
}

export default Success;
