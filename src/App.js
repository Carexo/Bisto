import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import JoinPage from "./pages/JoinPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/join">
          <JoinPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
