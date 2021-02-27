import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Login/RegisterForm";
import Wrapper from "./components/Wrapper";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/LoginForm" component={LoginForm} />
        <Route exact path="/RegisterForm" component={RegisterForm} />
        <Route exact path="/home" component={Home} />
      </Wrapper>
    </Router>
  );
}

export default App;
