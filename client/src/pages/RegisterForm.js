import React from "react";
import "./Authentication.scss";
import $ from "jquery";







function LoginForm(props) {
  $(".message a").click(function () {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  });


  // Once API routes are defined they will be used for login

  return (
    <div class="login-page">
            <script src="js/submitreg.js"></script>
      <div>
        <h1 class="title">
          <h1>TypeCheck</h1>
          <h3>Please Create an Account!</h3>
        </h1>
      </div>
      <div class="form">
        <form classname="signup-form">
          <input type="text" placeholder="username" id="username-signup" />
          <input type="password" placeholder="password" id="password-signup" />
          <input type="text" placeholder="email address" id="email-signup" />
          <button type="submit">create</button>
          <p class="message">
            Already registered? <a href="./LoginForm">Sign In</a>
          </p>
        </form>
      </div>

    </div>
    
  );
}



export default LoginForm;
