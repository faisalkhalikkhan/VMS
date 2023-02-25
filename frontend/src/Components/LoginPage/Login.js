import React from "react";
import "./login.css";
import { FaUserAlt } from "react-icons/fa";
import {RiLockPasswordFill, RiLoginCircleLine} from 'react-icons/ri'

const Login = () => {
    
  return (
    <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form className="login">
            <div className="login__field">
              <FaUserAlt className="login__icon"  />
              <input
                type="text"
                class="login__input"
                placeholder="User name / Email"
              />
            </div>
            <div class="login__field">
              <RiLockPasswordFill className="login__icon" />
              <input
                type="password"
                class="login__input"
                placeholder="Password"
              />
            </div>
            <button className="button login__submit">
              <span className="button__text">Log In Now</span>
              <RiLoginCircleLine className="button__icon" />
            </button>
          </form>
          <div class="social-login">
            <h3>SignUp</h3>
          </div>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
