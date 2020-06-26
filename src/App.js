import React from "react";
import "./assets/styles/global.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Signin from "./features/Signin";
import Signup from "./features/Signup";
import HomePage from "./features/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
