import Header from "./Header";
import "../styles/ProjectsPage.css";

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <Header />
      <div className="main">
        <div className="project-container">
          <div className="single-project">
            <h2>Pizza Form</h2>
            <p>Image of Project here</p>
            <div className="code-links">
              {" "}
              <p>Code</p>
              <p>Live</p>
            </div>
          </div>

          <div className="single-project">
            <h2>Asylum Office Grant Rate Tracker</h2>
            <p>Image of Project here</p>
            <div className="code-links">
              {" "}
              <p>Code</p>
              <p>Live</p>
            </div>
          </div>

          <div className="single-project">
            <h2>RoboFriends</h2>
            <p>Image of Project here</p>
            <div className="code-links">
              {" "}
              <p>Code</p>
              <p>Live</p>
            </div>
          </div>

          <div className="single-project">
            <h2>User Onboarding</h2>
            <p>Image of Project here</p>
            <div className="code-links">
              {" "}
              <p>Code</p>
              <p>Live</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
