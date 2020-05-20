import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Registration from "./pages/Registration";
import Footer from "./components/Footer/index";

function App() {
  return (
    <div id="backgroundimg">
      <Router>
        <Switch>
          <Route component={Books} exact path={["/active"]}></Route>
          <Route exact path={["/"]}>
            <Registration />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
