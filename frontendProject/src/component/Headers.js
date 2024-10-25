import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import logo from "./../images/logo1.png";
import profile from "../images/user.jpg";
import { BsCart3 } from "react-icons/bs";

import { NavLink } from "react-router-dom";

const Headers = () => {
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("username");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  return (
    <>
      <header className="">
        <div className="container">
          <nav className="p-3 navbar fixed-top navbar-expand-lg navbar-dark sticky-navbar">
            <div className="logoImage me-lg-auto">
              <img src={logo} alt="" className="img-fluid"></img>
            </div>

            <ul className="nav col-12 col-lg-auto mb-2 justify-content-end mb-md-0 me-lg-3 fw-bolder">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link px-2 active"
                      : "nav-link px-2 link-dark"
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link px-2  active"
                      : "nav-link px-2 link-dark"
                  }
                >
                  PRODUCTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link px-2 active"
                      : "nav-link px-2 link-dark"
                  }
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link px-2 active"
                      : "nav-link px-2 link-dark"
                  }
                >
                  CONTACT
                </NavLink>
              </li>

              {!token ? (
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link px-2 active"
                        : "nav-link px-2 link-dark"
                    }
                  >
                    LOGIN
                  </NavLink>
                </li>
              ) : (
                <>
                  <li onClick={logout}>
                    <NavLink to="/login" className="nav-link px-2 link-dark">
                      LOGOUT
                    </NavLink>
                  </li>
                  <li>
                    <img src={profile} alt="" className="profileImage"></img>
                    <div>
                      <small className="text-capitalize text-dark username">
                        {userName}
                      </small>
                    </div>
                  </li>
                </>
              )}

              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link px-2 link-dark"
                      : "nav-link px-2 link-dark"
                  }
                >
                  <BsCart3 />
                  <span
                    className="badge bg-danger small-badge"
                    style={{ fontSize: "0.6rem", padding: "0.1rem 0.2rem" }}
                  >
                    1
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Headers;
