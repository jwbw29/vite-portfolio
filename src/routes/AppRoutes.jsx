import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import ProjectsPage from "../components/ProjectsPage";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/projects" component={ProjectsPage} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
