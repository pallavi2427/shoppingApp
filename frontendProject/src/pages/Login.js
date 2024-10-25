import React, { useState } from "react";
import Headers from "../component/Headers";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const loginPage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5001/api/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const token = response.data.token;
      const uname = response.data.username;
      const contact = response.data.contact;
      localStorage.setItem("token", token);
      localStorage.setItem("username", uname);
      localStorage.setItem("contact", contact);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Headers />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="login-container free-contact">
              <h2>Login</h2>
              <form onSubmit={loginPage}>
                <div className="input-group">
                  <label>Username</label>
                  <input type="text" name="username" onChange={handleInput} />
                </div>
                <div className="input-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleInput}
                  />
                </div>
                <button type="submit" className="login-btn">
                  Login
                </button>
                <ToastContainer />
                <p className="register-link">
                  Don't have an account?{" "}
                  <NavLink to="/register">Register</NavLink>
                </p>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
