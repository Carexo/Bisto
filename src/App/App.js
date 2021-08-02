import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import JoinPage from "../pages/JoinPage/JoinPage";
import SignUpPage from "../pages/JoinPage/SignUpPage/SignUpPage";

import HomePage from "../pages/HomePage/HomePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/join" exact>
          <JoinPage />
        </Route>
        <Route path={["/join/log-in", "/join/sign-up"]} exact>
          <SignUpPage />
        </Route>
        {/* <Route exact path="/join/log-in">
          <LogInPage />
        </Route>
        <Route exact path="/join/sign-up">
          <SignUpPage />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
