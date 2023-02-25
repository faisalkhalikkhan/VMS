import React from "react";
import "./sup.css";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill, RiLoginCircleLine } from "react-icons/ri";
import { useNavigate} from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate()
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <div className="login_redirect" onClick={() => navigate('/')}>
            <h3>SignIn</h3>
          </div>
          <form className="login">
            <div className="login__field">
              <FaUserAlt className="login__icon" />
              <input type="text" class="login__input" placeholder="User name" />
            </div>
            <div className="login__field">
              <FaUserAlt className="login__icon" />
              <input type="text" class="login__input" placeholder="Email" />
            </div>
            <div className="login__field">
              <FaUserAlt className="login__icon" />
              <input type="text" class="login__input" placeholder="Mobile" />
            </div>
            <div className="login__field">
              <RiLockPasswordFill className="login__icon" />
              <input
                type="password"
                class="login__input"
                placeholder="Password"
              />
            </div>
            <button className="button login__submit">
              <span className="button__text">SignUp Now</span>
              <RiLoginCircleLine className="button__icon" />
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
