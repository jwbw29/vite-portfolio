import logo from "../assets/jb-logo.png";
import "../styles/App.css";
import { Link } from "react-router-dom";
import Socials from "./Socials";

export default function LandingPage() {
  return (
    <div className="App">
      <div className="header">
        {" "}
        <img src={logo} alt="logo" className="logo" />
        <button className="email-button">Contact Me</button>
      </div>
      <div className="main-content">
        <h1>justin_byrd</h1>
        <div className="nav-items">
          <Link to="/projects">
            {" "}
            <h3>Projects</h3>
          </Link>
          {/* TODO This will be a link to a pdf (need to look in to this) */}
          <h3>Resume</h3>
        </div>
      </div>
      <Socials />
    </div>
  );
}
