import React from "react";
import Headers from "../component/Headers";
import { TbTruckDelivery } from "react-icons/tb";
import Footers from "../component/Footers";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FiTruck } from "react-icons/fi";

const About = () => {
  return (
    <>
      <Headers />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h1 className="text-center">
              Why Shop <span className="producthead">With Us</span>
            </h1>
            <hr className="heading-center"></hr>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div
          className="row row-cols-1 row-cols-md-3 mb-3 text-center"
          style={{ margin: "60px 118px" }}
        >
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm free-del">
              <div className="card-body cardDesign">
                <h1 className="card-title pricing-card-title">
                  <TbTruckDelivery className="icon-hover" />
                </h1>
                <ul className="list-unstyled text-white mt-3 mb-4">
                  <li>
                    <h5 className="icon-hover">Fast Delivery</h5>
                  </li>
                  <li>variations of passages of Lorem Ipsum available</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm free-del">
              <div className="card-body cardDesign">
                <h1 className="card-title pricing-card-title text-white">
                  <span className="freeShip icon-hover">
                    <u>Free</u>
                  </span>
                  <FiTruck className="icon-hover" />
                </h1>
                <ul className="list-unstyled text-white mt-3 mb-4">
                  <li>
                    <h5 className="icon-hover">Free Shipping</h5>
                  </li>
                  <li>variations of passages of Lorem Ipsum available</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm free-del">
              <div className="card-body cardDesign">
                <h1 className="card-title pricing-card-title">
                  <FaHandHoldingHeart className="icon-hover" />
                </h1>
                <ul className="list-unstyled text-white mt-3 mb-4">
                  <li>
                    <h5 className="icon-hover">Best Quality</h5>
                  </li>
                  <li>variations of passages of Lorem Ipsum available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <Footers />
    </>
  );
};

export default About;
