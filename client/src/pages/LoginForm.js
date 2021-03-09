import React from "react";
import "./Authentication.scss";
import $ from "jquery";






function LoginForm(props) {
  $(".message a").click(function () {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  });

//   async function loginFormHandler(event) {
//     event.preventDefault();
  
//     const username = document.querySelector('#username-login').value.trim();
//     const email = document.querySelector('#email-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();
  
//     if (username && email && password) {
//       const response = await fetch('/api/login', {
//         method: 'post',
//         body: JSON.stringify({
//           username,
//           email,
//           password
//         }),
//         headers: { 'Content-Type': 'application/json' }
//       });
  
//       // goes to dashboard if valid login
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   }

// document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

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
        <form classname="login-form">
          <input type="text" placeholder="username" id="username-login" />
          <input type="password" placeholder="password" id="password-login" />
          <button type="submit">login</button>
          <p class="message">
            Not registered? <a href="RegisterForm">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
