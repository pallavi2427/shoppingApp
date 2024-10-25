import React, { useEffect } from "react";
import Headers from "../component/Headers";
import slider from "./../images/slider-bg.jpg";
import logo from "../images/logo1.png";
import { FaTelegramPlane } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import insta from "../images/insta.png";
import facebook from "../images/facebook1.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";

const Home = () => {
  return (
    <>
      <Headers />
      <div className="slider_bg_box">
        <img src={slider}></img>
      </div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1 className="slider-text">Sale 20% Off</h1>
                    <span>
                      <h1>On Everything</h1>
                    </span>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum
                      eaque magnam fugiat hic? Esse dicta aliquid error
                      repudiandae earum suscipit fugiat molestias, veniam, vel
                      architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1 className="slider-text">Sale 20% Off</h1>
                    <span>
                      <h1>On Everything</h1>
                    </span>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum
                      eaque magnam fugiat hic? Esse dicta aliquid error
                      repudiandae earum suscipit fugiat molestias, veniam, vel
                      architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1 className="slider-text">Sale 20% Off</h1>
                    <span>
                      <h1>On Everything</h1>
                    </span>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum
                      eaque magnam fugiat hic? Esse dicta aliquid error
                      repudiandae earum suscipit fugiat molestias, veniam, vel
                      architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <ul
                className="carousel-indicators"
                style={{ position: "absolute", top: "100%", right: "43%" }}
              >
                <li
                  data-bs-target="#carouselExampleSlidesOnly"
                  data-bs-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-bs-target="#carouselExampleSlidesOnly"
                  data-bs-slide-to="1"
                ></li>
                <li
                  data-bs-target="#carouselExampleSlidesOnly"
                  data-bs-slide-to="2"
                ></li>
              </ul>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
      <div className="container-fluid footerSec pt-5">
        <div className="row">
          <div className="col-md-12">
            <footer className="footer-section">
              <div className="container">
                <div className="footer-content pt-5 pb-5">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                      <div className="footer-widget">
                        <div className="footer-logo">
                          <a href="index.html">
                            <img
                              src={logo}
                              className="img-fluid"
                              alt="logo"
                            ></img>
                          </a>
                        </div>
                        <div className="footer-text">
                          <p>
                            Lorem ipsum dolor sit amet, consec tetur adipisicing
                            elit, sed do eiusmod tempor incididuntut consec
                            tetur adipisicing elit,Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                        <div className="footer-social-icon">
                          <span>Follow us</span>
                          <NavLink to="">
                            <img
                              src={insta}
                              className=" iconimg"
                              alt="logo"
                            ></img>
                          </NavLink>
                          <NavLink to="">
                            <img
                              src={facebook}
                              className=" iconimg"
                              alt="logo"
                            ></img>
                          </NavLink>
                          <NavLink to="">
                            <img
                              src={twitter}
                              className=" iconimg"
                              alt="logo"
                            ></img>
                          </NavLink>
                          <NavLink to="">
                            <img
                              src={linkedin}
                              className=" iconimg"
                              alt="logo"
                            ></img>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                      <div className="footer-widget">
                        <div className="footer-widget-heading">
                          <h3>Useful Links</h3>
                        </div>
                        <ul>
                          <li>
                            <NavLink to="/" className="text-decoration-none">
                              Home
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/products"
                              className="text-decoration-none"
                            >
                              Products
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/about"
                              className="text-decoration-none"
                            >
                              About
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/contact"
                              className="text-decoration-none"
                            >
                              Contact
                            </NavLink>
                          </li>

                          <li>
                            <NavLink to="" className="text-decoration-none">
                              Our Services
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                      <div className="footer-widget">
                        <div className="footer-widget-heading">
                          <h3>Subscribe</h3>
                        </div>
                        <div className="footer-text mb-25">
                          <p>
                            Don’t miss to subscribe to our new feeds, kindly
                            fill the form below.
                          </p>
                        </div>
                        <div className="subscribe-form">
                          <form action="#">
                            <input
                              type="text"
                              placeholder="Email Address"
                            ></input>
                            <button>
                              <FaTelegramPlane className="teleColor" />
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
