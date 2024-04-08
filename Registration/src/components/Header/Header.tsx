import { Link } from "react-router-dom";
// Images
import logo from "../../assets/logo.png";

// styles
import "./Header.scss";

function Header() {
  return (
    <header className="headerContainer">
      <a href="/">
        <img src={logo} alt="Inmar Logo" className="logo" />
      </a>
      <div className="content">
        <p>
          Need assistance? Call <a href="tel:18001234567">1-800-123-4567</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
