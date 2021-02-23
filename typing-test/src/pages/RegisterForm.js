import React from "react";
import "./LoginForm.css";
import $ from "jquery";

function LoginForm(props) {
  $(".message a").click(function () {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  });

  // Once API routes are defined they will be used for login

  return (
    <div class="login-page">
      <div class="form">
        <form class="login-form">
          <input type="text" placeholder="name" />
          <input type="password" placeholder="password" />
          <input type="text" placeholder="email address" />
          <button>create</button>
          <p class="message">
            Already registered? <a href="./LoginForm">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
