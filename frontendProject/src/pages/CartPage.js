import React, { useEffect, useState } from "react";
import Headers from "../component/Headers";
import image from "./../images/pic4.webp";
import { AiFillInfoCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  const [count, setCount] = useState(1);
  const counttIncrement = () => {
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

      <div className="container my-3">
        <nav aria-label="breadcrumb">
          <div className="breadcrumb breadcrumb-custom text-center bg-body-tertiary border rounded-3 p-2">
            <h4>Cart Items</h4>
          </div>
        </nav>
      </div>

      <div className="container mt-5">
        <div className="row">
          {/* Cart Items Section */}
          <div className="col-md-8">
            <div className="row mt-2">
              <div className="col-md-3">
                <div className="d-flex justify-content-center">
                  <img src={image} alt="image" className="cartImage" />
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
                      onClick={counttIncrement}
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
                <p className="text-muted">Seller:RetailNet</p>
                <p>
                  <span className="text-decoration-line-through">₹5,105</span>
                  <span className="ms-2 fw-bold">₹2,809</span>
                  <span className="ms-2 text-success">44% Off</span>
                  <span className="ms-2 text-success fw-normal">
                    1 offer applied <AiFillInfoCircle />
                  </span>
                </p>
              </div>
              {/* Similar structure for other items */}
            </div>
            <hr />
            <nav aria-label="breadcrumb">
              <div className="rounded-3 p-2">
                <div className="d-flex justify-content-center">
                  <NavLink to="/buy">
                    <button
                      className="btn text-white"
                      style={{ backgroundColor: "#ff424d" }}
                    >
                      PLACE ORDER
                    </button>
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>

          {/* Price Details Sidebar */}
          <div className="col-md-4">
            <div
              className="list-group"
              style={{ width: "356px", marginLeft: "60px" }}
            >
              <a
                href="#"
                className="list-group-item list-group-item-action text-white"
                style={{ backgroundColor: "#ff424d" }}
                aria-current="true"
              >
                <p className="mb-1">PRICE DETAILS</p>
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1">Price (1 item)</p>
                  <small className="text-muted">₹2809</small>
                </div>
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1">Delivery Charges</p>
                  <small className="text-muted">₹40</small>
                </div>
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1">Total Amount</p>
                  <small className="text-muted">₹2849</small>
                </div>
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h6 className="mb-1 text-success">
                    You will save ₹2256 on this order
                  </h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
