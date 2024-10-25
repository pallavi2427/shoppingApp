import React, { useState } from "react";
import Headers from "../component/Headers";
import Footers from "../component/Footers";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const contactUs = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5001/api/contact-us",
        formData
      );
      // toast.success("Message sent successfully !!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Headers />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">
              Contact <span className="producthead">Us</span>
            </h1>
            <hr className="heading-center"></hr>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-5">
        <div className="row  innerform">
          <div className="col-md-12 col-6 col-lg-6 p-4 free-contact mt-5">
            <form onSubmit={contactUs}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-shadow"
                  name="name"
                  onChange={handleInput}
                  placeholder="Enter Your Full Name"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-shadow"
                  name="email"
                  onChange={handleInput}
                  placeholder="Enter Your Email Address"
                  required
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-shadow"
                  name="subject"
                  onChange={handleInput}
                  placeholder="Enter Subject"
                  required
                />
              </div>
              <br />

              <div className="form-group">
                <textarea
                  className="form-control form-control-shadow"
                  name="message"
                  rows="4"
                  onChange={handleInput}
                  placeholder="Enter Your Message"
                  required
                ></textarea>
              </div>
              <br />

              <button type="submit" className="login-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr></hr>
      <Footers />
    </>
  );
};

export default Contact;
