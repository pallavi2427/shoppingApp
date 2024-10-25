import React, { useState } from "react";
import Headers from "../component/Headers";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    contact: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const postApi = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5001/api/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("User Register Successfully");
      setFormData("");
      console.log(response);
    } catch (error) {
      toast.error("Failed");
      console.log(error);
    }
  };

  return (
    <>
      <Headers />
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="login-container">
              <ToastContainer />
              <h2>Register</h2>
              <form onSubmit={postApi}>
                <div className="input-group">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    onChange={handleInput}
                  ></input>
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                  ></input>
                </div>
                <div className="input-group">
                  <label>Contact</label>
                  <input
                    type="text"
                    name="contact"
                    onChange={handleInput}
                  ></input>
                </div>
                <div className="input-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleInput}
                  ></input>
                </div>
                <button type="submit" className="login-btn">
                  Register
                </button>
                <p className="register-link">
                  Already register ? <NavLink to="/login">Login</NavLink>
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

export default Register;
