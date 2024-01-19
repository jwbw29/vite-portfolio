import Header from "./Header";
import "../styles/ProjectsPage.css";
import pizzaGif from "../assets/btpizza.gif";
import roboGif from "../assets/robofriends.gif";

export default function ProjectsPage() {
  return (
    <div className="App">
      <Header />
      <div className="projects-page-main">
        <div className="project-container">
          <div className="single-project">
            <h2>Pizza Form</h2>
            <img src={pizzaGif} alt="pizza-form" />
            <div className="code-links">
              {" "}
              <p>Code</p>
              <p>Live</p>
            </div>
          </div>

          {/* !!!! Gotta figure out how to deploy this one - first attempt failed */}
          {/* <div className="single-project">
            <h2>Asylum Office Grant Rate Tracker</h2>
            <p>Image of Project here</p>
            <div className="code-links">
              {" "}
              <p>Code</p>
              <p>Live</p>
            </div>
          </div> */}

          <div className="single-project">
            <h2>RoboFriends</h2>
            <img src={roboGif} alt="robofriends" />
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
