import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import LandingPage from "../pages/LandingPage"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={SignIn} />
      <Route path="/cadastro" component={SignUp} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;