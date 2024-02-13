import Header from "./Header";
import Footer from "./Footer";
import "../styles/ProjectsPage.css";
import pizzaGif from "../assets/bt-pizza/btpizza.gif";
import roboGif from "../assets/robofriends/robofriends.gif";
import onboardingGif from "../assets/user-onboarding/user-onboarding.gif";
import nasaPic from "../assets/nasa/thumbnail.png";

export default function ProjectsPage() {
  return (
    <div className="App">
      <Header />
      <div className="projects-page-main">
        <div className="project-container">
          <div className="single-project">
            <h2>Astrology Picture of the Day</h2>
            <img src={nasaPic} alt="nasa project" />
            <div className="code-links">
              {" "}
              <a
                href="https://github.com/jwbw29/nasa-pic-of-the-day.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
              <a
                href="https://nasa-pic-of-the-day.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
          <div className="single-project">
            <h2>Pizza Form</h2>
            <img src={pizzaGif} alt="pizza-form" />
            <div className="code-links">
              {" "}
              <a
                href="https://github.com/jwbw29/PizzaForm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
              <a
                href="https://pizza-form-brown.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>

          {/* !!!! Gotta figure out how to deploy this one - first attempt failed */}
          {/* <div className="single-project">
            <h2>Asylum Office Grant Rate Tracker</h2>
            <p>Image of Project here</p>
            <div className="code-links">
              {" "}
              <a href="" target="_blank" rel="noopener noreferrer">Repo</a>
              <a href="" target="_blank" rel="noopener noreferrer">
                Live
              </a>
            </div>
          </div> */}

          <div className="single-project">
            <h2>RoboFriends</h2>
            <img src={roboGif} alt="robofriends" />
            <div className="code-links">
              {" "}
              <a
                href="https://github.com/jwbw29/ztm-robot-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
              <a
                href="https://ztm-robot-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>

          <div className="single-project">
            <h2>User Onboarding</h2>
            <img src={onboardingGif} alt="user-onboarding" />
            <div className="code-links">
              {" "}
              <a
                href="https://github.com/jwbw29/user-onboarding"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
              <a
                href="https://user-onboarding-woad.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
