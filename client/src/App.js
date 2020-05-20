import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Registration from "./pages/Registration";

import Footer from "./components/Footer/index";
import Login from "./pages/login";
import Nav from "./components/Nav";
import MainPage from "./pages/mainpage";
import Maps from "./pages/maps";


function App() {
  return (
<<<<<<< HEAD
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
=======
    <Router>
      <Switch>

        <Route component={Books} exact path={["/active"]}></Route>
        <Route exact path={["/login", "/entrar"]}>
          <Registration />
        </Route>
        <Route exact path={["/"]}>

        <Route exact path={["/active"]}>
          <Books />
        </Route>
        <Route exact path={["/register",]}>

          <Registration />
        </Route>        
        <Route exact path={["/", "/login"]}>
          <Login />
        </Route>
        <Route exact path="/books/:id">
          <Detail />
        </Route>
        <Route exact path={["/mainpage",]}>
          <MainPage />
        </Route>
        <Route exact path={["/maps",]}>
          <Maps />
        </Route>                  
        <Route>
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
>>>>>>> 2ba0d0669b97d7168aadc20d1f427638e63eb43f
  );
}

export default App;
