import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

import JoinPage from "../pages/JoinPage/JoinPage";
import SignUpPage from "../pages/JoinPage/SignUpPage/SignUpPage";

import HomePage from "../pages/HomePage/HomePage";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {!isLoggedIn && (
          <Route path="/join" exact>
            <JoinPage />
          </Route>
        )}
        {!isLoggedIn && (
          <Route path={["/join/log-in", "/join/sign-up"]} exact>
            <SignUpPage />
          </Route>
        )}
        <Route path="/join/*">
          <Redirect to="/join" />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
