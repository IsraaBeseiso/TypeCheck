import React from "react";
import "./Authentication.css";
import $ from "jquery";

function LoginForm(props) {
  // $(".message a").click(function () {
  //   $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  // });

  // Once API routes are defined they will be used for login

  return (
    <div class="login-page">
      <div>
        <h1 class="title">
          <h1>TypeCheck</h1>
          <h3>Please Sign in</h3>
        </h1>
      </div>
      <div class="form">
        <form class="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>login</button>
          <p class="message">
            Not registered? <a href="RegisterForm">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
