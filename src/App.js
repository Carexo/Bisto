import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import JoinPage from "./pages/JoinPage";
import SignUpForm from "./components/JoinPageComponents/SignUp/SignUpForm";
import LogInForm from "./components/JoinPageComponents/LogIn/LogInForm";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/join">
          <JoinPage />
        </Route>
        <Route exact path="/join/log-in">
          <LogInForm />
        </Route>
        <Route exact path="/join/sign-up">
          <SignUpForm />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
