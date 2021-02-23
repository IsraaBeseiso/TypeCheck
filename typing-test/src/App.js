import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          {/* <Route exact path="/" component={Dashboard} /> */}
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/LoginForm" component={LoginForm} />
          <Route exact path="/RegisterForm" component={RegisterForm} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
