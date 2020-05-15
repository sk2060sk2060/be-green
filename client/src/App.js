import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Registration from "./pages/Registration";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path={["/active"]}>
          <Books />
        </Route>
        <Route exact path={["/login", "/entrar"]}>
          <Registration />
        </Route>
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
    </Router>
  );
}

export default App;