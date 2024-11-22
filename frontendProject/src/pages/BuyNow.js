import React, { useState } from "react";
import Headers from "../component/Headers";
import image from "./../images/pic4.webp";
import { TiTick } from "react-icons/ti";
import { AiFillInfoCircle } from "react-icons/ai";

const BuyNow = () => {
  const uName = localStorage.getItem("username");
  const contact = localStorage.getItem("contact");

  const [count, setCount] = useState(1);
  const countIncrement = () => {
    setCount(count + 1);
  };
  const countDecrement = () => {
    setCount(count - 1);
    if (count <= 1) {
      setCount(1);
    }
  };

  return (
    <>
      <Headers />

      <div className="container" style={{ paddingTop: "95px" }}>
        <div className="row">
          <div className="col-md-8">
            <nav aria-label="breadcrumb">
              <div className="bg-body-tertiary border rounded-3 p-3 d-flex justify-content-between align-items-center">
                {/* Left Section: Login and Contact */}
                <div>
                  <h6 className="d-flex align-items-center mb-1">
                    LOGIN
                    <TiTick className="ms-2" />
                  </h6>
                  <div>
                    <span className="fw-bold text-capitalize">{uName}</span>
                    <span className="mx-2">|</span>
                    <span>+91 {contact}</span>
                  </div>
                </div>

                {/* Right Section: Change Button */}
                {/* <button className="btn btn-link text-decoration-none">
                  Change
                </button> */}
              </div>
            </nav>

            <div className="container p-0 my-2">
              <nav aria-label="breadcrumb">
                <div className="bg-body-tertiary border rounded-3 p-2">
                  <h6>
                    DELIVERY ADDRESS
                    <TiTick />
                  </h6>
                  <div className="d-inline">
                    <p className="d-inline mx-2">
                      19, Silicon city - <span className="fw-bold">452001</span>
                    </p>
                  </div>
                </div>
              </nav>
            </div>

            <nav aria-label="breadcrumb">
              <div
                className="text-center rounded-2 text-white p-1 my-2"
                style={{ backgroundColor: "#ff424d" }}
              >
                <h4>ORDER SUMMARY</h4>
              </div>
            </nav>

            <div className="row mt-3">
              <div className="col-md-3 p-0">
                <div className="d-flex justify-content-center">
                  <img src={image} alt="product" className="cartImage" />
                </div>
                <div className="mt-2">
                  <span>
                    <button
                      onClick={countDecrement}
                      className="btn btnColor btn-sm fw-bold text-white"
                      style={{ marginLeft: "55px", backgroundColor: "#ff424d" }}
                    >
                      -
                    </button>
                  </span>
                  <span style={{ marginLeft: "16px" }}>{count}</span>
                  <span>
                    <button
                      onClick={countIncrement}
                      className="btn btn-sm fw-bold text-white"
                      style={{ marginLeft: "16px", backgroundColor: "#ff424d" }}
                    >
                      +
                    </button>
                  </span>
                </div>
              </div>

              <div className="col-md-9">
                <div className="d-flex w-100 justify-content-between">
                  <p className="fw-bold mb-1">
                    Boult Astra with Quad Mic ENC, 48Hrs Battery
                  </p>
                  <small>Delivery by Tue Oct 1 | ₹40</small>
                </div>
                <p className="text-muted">Seller: RetailNet</p>
                <p className="">
                  <span className="text-decoration-line-through">₹5,105</span>
                  <span className="ms-2 fw-bold">₹2,809</span>
                  <span className="ms-2 text-success">44% Off</span>
                  <span className="ms-2 text-success fw-normal">
                    1 offer applied <AiFillInfoCircle />
                  </span>
                </p>
              </div>
            </div>

            <div className="container my-3 p-0">
              <nav aria-label="breadcrumb">
                <div className="bg-body-tertiary border rounded-3 p-2">
                  <p className="d-inline mx-2">
                    Order confirmation email will be sent to your registered
                    email.
                  </p>
                  <span>
                    <button
                      className="btn text-white"
                      style={{ backgroundColor: "#ff424d" }}
                    >
                      PLACE ORDER
                    </button>
                  </span>
                </div>
              </nav>
            </div>
          </div>

          {/* Price details */}
          <div className="col-md-4">
            <div className="list-group">
              <div
                className="list-group-item list-group-item-action text-white"
                style={{ backgroundColor: "#ff424d" }}
              >
                <p className="mb-1">PRICE DETAILS</p>
              </div>

              <div className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1">Price (1 item)</p>
                  <small className="text-muted">₹2809</small>
                </div>
              </div>

              <div className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1">Delivery Charges</p>
                  <small className="text-muted">₹40</small>
                </div>
              </div>

              <div className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1">Total Amount</p>
                  <small className="text-muted">₹2849</small>
                </div>
              </div>

              <div className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h6 className="mb-1 text-success">
                    You will save ₹2256 on this order
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyNow;
