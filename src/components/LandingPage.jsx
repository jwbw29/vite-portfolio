import "../styles/App.css";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
import Socials from "./Socials";
import Header from "./Header";
import Footer from "./Footer";

export default function LandingPage() {
  const my_resume = "/Justin Byrd - Full Stack Web Developer Resume.pdf";

  return (
    <div className="App">
      <Header />
      <div className="landing-page-main">
        <h1>justin_byrd</h1>
        <div className="nav-items">
          <Link to="/projects">
            {" "}
            <h3>Projects</h3>
          </Link>
          <a
            id="resume"
            href={my_resume}
            alt="justin-byrd-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <Socials />
      <Footer />
    </div>
  );
}
