import React from "react";
import LoginPage from "./pages/loginPage/LoginPage";
import { Route, Switch } from "react-router-dom";
import AdministrationPage from "./pages/Administration/AdministrationPage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/admi" component={AdministrationPage} />
      </Switch>
    </div>
  );
};

export default App;
