import logo from "../assets/jb-logo.png";
import "../styles/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const emailAddress = "hi@justin-byrd.com";
  const handleButtonClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="header">
      {" "}
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="nav-buttons">
        {" "}
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <button className="email-button" onClick={handleButtonClick}>
          Contact Me
        </button>
      </div>
    </div>
  );
}
