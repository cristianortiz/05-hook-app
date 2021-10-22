import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "./About";
import Login from "./Login";
import HomePage from "./HomePage";
import NavBar from "./NavBar";

const AppRouter = () => {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          {/* default route, similar to a 404 page error */}
          <Redirect to="/" />
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
