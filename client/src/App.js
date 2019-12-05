import React from "react";
import ViewJobEntry from "./pages/Details";
import JobForm from "./components/JobEntry/JobForm";
import WelcomeScreen from "./components/WelcomeScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <WelcomeScreen />
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <Route exact path="/jobs/:id" component={ViewJobEntry} />
          <Route exact path="/view-jobs" component={ViewJobEntry} />
          <Route exact path="/create-jobs" component={JobForm} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
