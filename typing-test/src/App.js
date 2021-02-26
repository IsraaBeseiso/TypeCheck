import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LoginForm from "./pages/login/LoginForm";
import RegisterForm from "./pages/login/RegisterForm";
import Wrapper from "./Wrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";
import { Row, Col, Container } from "reactstrap";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/LoginForm" component={LoginForm} />
          <Route exact path="/RegisterForm" component={RegisterForm} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
