import React, { useState } from "react";
import "./login.css";
import { FaUserAlt } from "react-icons/fa";
import {RiLockPasswordFill, RiLoginCircleLine} from 'react-icons/ri'
import { useNavigate} from 'react-router-dom'
import axios from "axios";
import { notification } from 'antd'

const Login = ({setUser}) => {

  const navigate = useNavigate()

  const [userInput, setUserInput] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (event) => {
    event.preventDefault()
    let body = { password: password}
    if(userInput.indexOf('@') > 0){
      body = {...body, email: userInput}
    }else {
      body = {...body, name: userInput}
    }

    axios.post('http://localhost:5000/user/auth/login', body).then(response => {
      setUser(response.data)
      navigate('/')
    }).catch(error => {
      notification.open({
        message: "Notification Invalid",
        placement: "bottomRight",
        description:
          "You have made a mistake, please try again with the valid user cretandential",
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    })
  }
    
  return (
    <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form className="login" onSubmit={submitHandler}>
            <div className="login__field">
              <FaUserAlt className="login__icon"  />
              <input
                type="text"
                class="login__input"
                placeholder="User name / Email"
                onChange={(e) => setUserInput(e.target.value)}
              />
            </div>
            <div class="login__field">
              <RiLockPasswordFill className="login__icon" />
              <input
                type="password"
                class="login__input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="button login__submit">
              <span className="button__text">Log In Now</span>
              <RiLoginCircleLine className="button__icon" />
            </button>
          </form>
          <div class="social-login" onClick={() => navigate('/signup')}>
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
