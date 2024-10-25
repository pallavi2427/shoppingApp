import React, { useState, useEffect } from "react";
import Headers from "../component/Headers";
import Footers from "../component/Footers";
import { NavLink } from "react-router-dom";
import { RotatingTriangles } from "react-loader-spinner";

const Products = () => {
  const token = localStorage.getItem("token");
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  const getData = async () => {
    setLoading(true);
    setTimeout(async () => {
      const response = await fetch("http://localhost:5001/api/get-product");
      const data = await response.json();
      setItem(data);
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Headers />
      <div className="container">
        <div className="row" style={{ paddingTop: "40px" }}>
          <div className="col-md-12 mt-5">
            <h1 className="text-center">
              Our <span className="producthead">Products</span>
            </h1>
            <hr className="heading-center"></hr>
          </div>
        </div>
        <div className="row">
          <div className="shell">
            <div className="container">
              <div className="row">
                {loading ? (
                  <div className="loader-container">
                    {/* Loader centered on the page */}
                    <RotatingTriangles
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="dna-loading"
                      wrapperStyle={{}}
                      wrapperClass="RotatingTriangles-wrapper"
                    />
                  </div>
                ) : (
                  item.map((value, index) => {
                    return (
                      <div className="col-md-3" key={index}>
                        <div className="wsk-cp-product">
                          <div className="wsk-cp-img">
                            <NavLink to={`/product/${value._id}`}>
                              <img
                                src={`http://localhost:5001/assets/${value.image}`}
                                alt="Product"
                                className="img-responsive imgCard"
                                height="auto"
                                width="100%"
                              />
                            </NavLink>
                          </div>
                          <div className="wsk-cp-text">
                            <div className="title-product">
                              <h3>{value.category}</h3>
                            </div>
                            <NavLink
                              to="/product"
                              className="text-decoration-none"
                            >
                              <div className="description-prod">
                                <p>{value.description}</p>
                              </div>
                            </NavLink>
                            <div className="card-footer text-center">
                              <div className="wcf-left">
                                <span className="price">
                                  ₹ {value.amount}{" "}
                                  <del className="text-secondary h6">20999</del>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footers />
    </>
  );
};

export default Products;
