import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { Storecontext } from '../context/Storecontext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const { url, setToken } = useContext(Storecontext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    const endpoint = currState === "Login" ? "/api/user/login" : "/api/user/register";
    try {
      const response = await axios.post(url + endpoint, data);
      if (response.data.success) {
        const { token } = response.data;
        setToken(token);
        localStorage.setItem("token", token);
        setShowLogin(false);
      } else {
        alert(response.data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("An error occurred during the request:", error.response?.data || error.message);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input 
              name='name' 
              onChange={onChangeHandler} 
              value={data.name} 
              type="text" 
              placeholder="Your Name" 
              required 
            />
          )}
          <input 
            name='email' 
            onChange={onChangeHandler} 
            value={data.email} 
            type="email" 
            placeholder='Your Email' 
            required 
          />
          <input 
            name='password' 
            onChange={onChangeHandler} 
            value={data.password} 
            type="password" 
            placeholder='Password' 
            required 
          />
        </div>
        <button type='submit'>
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login"
          ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  );
};

export default LoginPopup;
