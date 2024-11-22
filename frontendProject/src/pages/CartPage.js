import React, { useEffect, useState } from "react";
import Headers from "../component/Headers";
import cart from "./../images/cart.webp";
import { AiFillInfoCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import axios from "axios";

const CartPage = () => {
  const [count, setCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0); // State to track total savings

  const countIncrement = () => {
    setCount(count + 1);
  };

  const countDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const calculateCartTotal = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const total = cartItems.reduce(
      (acc, item) =>
        acc +
        parseFloat(item.amount - item.amount * (item.offpercentage / 100)),
      0
    );
    setCartTotal(total);
  };

  const calculateTotalSavings = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const savings = cartItems.reduce(
      (acc, item) => acc + parseFloat(item.amount * (item.offpercentage / 100)),
      0
    );
    setTotalSavings(savings);
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("cartItems");
    if (storedItems) {
      const items = JSON.parse(storedItems);
      setCartItems(items);
      calculateCartTotal();
      calculateTotalSavings();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5001/api/payment", {
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    // Handle form submission here
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
          <div className="col-md-8">
            {/* Conditionally render cart image or cart items */}
            {cartItems.length === 0 ? (
              // Cart is empty, display the cart image
              <div className="cartImg d-flex justify-content-center align-items-center">
                <img src={cart} alt="Cart" />
              </div>
            ) : (
              // Cart has items, display the cart contents
              cartItems.map((item, index) => (
                <div className="row mt-2" key={index}>
                  <div className="col-md-3">
                    <div className="d-flex justify-content-center">
                      <img
                        src={`http://localhost:5001/assets/${item.image}`}
                        alt="image"
                        className="cartImage"
                      />
                    </div>
                    <div className="mt-2">
                      <button
                        onClick={countDecrement}
                        className="btn btnColor btn-sm fw-bold text-white"
                        style={{
                          marginLeft: "55px",
                          backgroundColor: "#ff424d",
                        }}
                      >
                        -
                      </button>
                      <span style={{ marginLeft: "16px" }}>{count}</span>
                      <button
                        onClick={countIncrement}
                        className="btn btn-sm fw-bold text-white"
                        style={{
                          marginLeft: "16px",
                          backgroundColor: "#ff424d",
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="col-md-9">
                    <div className="d-flex w-100 justify-content-between">
                      <p className="fw-bold mb-1">{item.title}</p>
                      <small>Delivery by Tue Oct 1 | ₹40</small>
                    </div>
                    <p className="text-muted">Seller: RetailNet</p>
                    <p>
                      <span className="text-decoration-line-through">
                        ₹{item.amount}
                      </span>
                      <span className="ms-2 fw-bold">
                        ₹
                        {(
                          item.amount -
                          item.amount * (item.offpercentage / 100)
                        ).toFixed(2)}
                      </span>
                      <span className="ms-2 text-success">
                        {item.offpercentage}% Off
                      </span>
                      <span className="ms-2 text-success fw-normal">
                        1 offer applied <AiFillInfoCircle />
                      </span>
                    </p>
                  </div>
                </div>
              ))
            )}

            {cartItems.length === 0 && (
              <>
                <div className="d-flex justify-content-center">
                  <p>Missing Cart items?</p>
                </div>
                <div className="d-flex justify-content-center">
                  <p>
                    <small>Login to see the items you added previously</small>
                  </p>
                </div>
              </>
            )}

            <hr />
            <nav
              aria-label="breadcrumb"
              className="sticky-order"
              style={{
                position: "sticky",
                bottom: "0px",
                backgroundColor: "#fff",
                padding: "10px",
                boxShadow: "0px -2px 10px rgba(0,0,0,0.1)",
                zIndex: "1000",
              }}
            >
              <div className="rounded-3 p-2 sticky-order">
                <div className="d-flex justify-content-center">
                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#ff424d" }}
                    onClick={handleSubmit}
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </nav>
          </div>

          <div className="col-md-4">
            <div
              className="list-group sticky-sidebar"
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
                  <p className="mb-1">Price ({cartItems.length} items)</p>
                  <small className="text-muted">₹{cartTotal.toFixed(2)}</small>
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
                  <small className="text-muted">
                    ₹{(cartTotal + 40).toFixed(2)}
                  </small>
                </div>
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h6 className="mb-1 text-success">
                    You will save ₹{totalSavings.toFixed(2)} on this order
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
