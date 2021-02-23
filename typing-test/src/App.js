import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import LoginForm from "./pages/LoginForm";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          {/* <Route exact path="/" component={Dashboard} /> */}
          <Route exact path="/loginForm" component={LoginForm} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
