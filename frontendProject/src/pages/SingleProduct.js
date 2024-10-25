import React, { useState, useEffect } from "react";
import Headers from "../component/Headers";
import Footers from "../component/Footers";
import image from "./../images/pic4.webp";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdOutlineStar } from "react-icons/md";
import { NavLink, useParams } from "react-router-dom";

const SingleProduct = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const colors = ["pink", "blue", "green", "yellow", "black"];
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const singleProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/single-product?id=${id}`
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    singleProduct();
  }, [id]);
{}
  return (
    <>
      <Headers />
      <div className="container" style={{ paddingTop: "120px" }}>
        <div className="row">
          <div className="col-md-4">
            <img
              src={`http://localhost:5001/assets/${product.image}`}
              alt="image"
              className="img-responsive"
              width="100%"
              height="75%"
            />

            <div className="row mt-3">
              {!token ? (
                <>
                  {" "}
                  <div className="col-md-6">
                    {" "}
                    <NavLink to="/login">
                      <button className="cart-btn">Add to Cart</button>
                    </NavLink>
                  </div>
                  <div className="col-md-6">
                    {" "}
                    <NavLink to="/login">
                      <button className="cart-btn">Buy Now</button>
                    </NavLink>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className="col-md-6">
                    {" "}
                    <NavLink to="/cart">
                      <button className="cart-btn">Add to Cart</button>
                    </NavLink>
                  </div>
                  <div className="col-md-6">
                    {" "}
                    <NavLink to="/buy">
                      <button className="cart-btn">Buy Now</button>
                    </NavLink>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="col-md-8">
            <div>
              <h6 className="mb-1">{product.category}</h6>
              <p className="fw-bold mb-1">{product.title}</p>
              <p className="text-success">Special Price</p>
              <p>
                <span className="fw-bold">{product.amount}</span>
                <span className="text-decoration-line-through ms-2">
                  ₹5,105
                </span>
                <span className="ms-2 text-success">44% Off</span>
                <span className="ms-2 text-success fw-normal">
                  <AiFillInfoCircle />
                </span>
              </p>
              <p>
                <span className="badge bg-success">
                  3.9
                  <MdOutlineStar />
                </span>
                <span className="ms-2 text-muted">
                  11,430 ratings and 549 reviews
                </span>
              </p>
              <p>Color</p>
              <div className="d-flex">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className="color-swatch me-2"
                    style={{
                      backgroundColor: color,
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      border:
                        selectedColor === color ? "2px solid black" : "none",
                    }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
              <div className="d-flex align-items-center mt-3">
                <p className="mb-0">Size</p>
                <span className="ms-2">
                  <button className="btn border">S</button>
                  <button className="btn border ms-1">M</button>
                  <button className="btn border ms-1">L</button>
                  <button className="btn border ms-1">XL</button>
                </span>
              </div>
            </div>
            <div className="row mt-3">
              <h3>Product Description</h3>
              <div className="col-3 text-center mt-2">
                <img
                  src={`http://localhost:5001/assets/${product.image}`}
                  alt="image"
                  className="des-image"
                />
              </div>
              <div className="col-9 mt-2">
                <h5>Lovely Embroidered Pattern</h5>
                <p>{product.description}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-8 mt-2 ms-3">
                <h5>Attractive Look</h5>
                <p>
                  Designed with a round neck and long sleeves, this set adds a
                  sophisticated and charming touch to your appearance.
                </p>
              </div>
              <div className="col-3 text-end mt-2">
                <img
                  src={`http://localhost:5001/assets/${product.image}`}
                  alt="image"
                  className="des-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default SingleProduct;
