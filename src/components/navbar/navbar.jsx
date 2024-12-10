import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

export function NavBar() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("names")) || []);
  const [user] = useState(localStorage.getItem("Name"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const email = localStorage.getItem("Email");
  const password = localStorage.getItem("Password");
  const [cart, setCart] = useState(0);
  let navigate = useNavigate();

  function Validate() {
    if (email && password) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }

 
  useEffect(() => {
    Validate();
  }, []);


  function handleLogout() {
    localStorage.removeItem("Name");
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");
    setIsLoggedIn(true);
  }

  // Handle cart navigation
  function handleCart() {
    if (isLoggedIn === true) {
      navigate("/Login");
    } else {
      navigate("/Cart");
    }
  }

  // Update cart value based on login status and data
  useEffect(() => {
    if (isLoggedIn === true) {
      setCart(0);
    } else {
      setCart(data ? data.length : 0); 
    }
  }, [isLoggedIn, data]); 

  return (
    <div>
      <nav>
        <div className="nav-logo">
          <span className="bi bi-justify fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></span>
          <img src="../../../images/logo-cart.jpg" alt="ShopNow Logo" />
          <span className="logo-title">ShopNow</span>
        </div>
        <div className="navitems">
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <span className="bi bi-house">Home</span>
          </Link>

          <span className="dropdown">
            <span
              className="dropdown-toggle bi bi-list"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
            >
              Categories
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to={"/Men"}>
                  Men Fashion
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to={"/Women"}>
                  Women Fashion
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to={"/Electronics"}>
                  Electronics
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to={"/Jewelery"}>
                  Jewelery
                </Link>
              </li>
            </ul>
          </span>
          <span
            className="bi bi-cart"
            onClick={handleCart}
            style={{ textDecoration: "none", color: "black" }}
          >
            Cart
            <span className="text-danger p-1 bg-warning rounded-4">{cart}</span>
          </span>

          <span className="dropdown">
            <span
              className="dropdown-toggle bi bi-person"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
            >
              Account
            </span>
            <ul className="dropdown-menu">
              {isLoggedIn ? (
                <>
                  <li>
                    <Link className="dropdown-item" to={"/Login"}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/Register"}>
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="dropdown-item" to={"/"} onClick={handleLogout}>
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </span>
          <span style={{ color: "orange", fontWeight: "bold" }}>{user}</span>
        </div>
      </nav>

      {/* Offcanvas */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header">
          <div className="nav-logo">
            <img src="../../../images/logo-cart.jpg" alt="ShopNow Logo" />
            <span className="logo-title">ShopNow</span>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              <span className="bi bi-house">Home</span>
            </Link>
          </div>
          <div>
            <span className="dropdown">
              <span
                className="dropdown-toggle bi bi-list"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: "pointer" }}
              >
                Categories
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={"/Men"}>
                    Men Fashion
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/Women"}>
                    Women Fashion
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/Electronics"}>
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/Jewelery"}>
                    Jewelery
                  </Link>
                </li>
              </ul>
            </span>
          </div>
          <div>
            <Link to={"/Cart"} style={{ textDecoration: "none", color: "black" }}>
              <span className="bi bi-cart">
                Cart
                <span className="text-danger p-2">{cart}</span>
              </span>
            </Link>
          </div>
          <div>
            <span className="dropdown">
              <span
                className="dropdown-toggle bi bi-person"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
              </span>
              <ul className="dropdown-menu">
                {isLoggedIn ? (
                  <>
                    <li>
                      <Link className="dropdown-item" to={"/Login"}>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/Register"}>
                        Register
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="dropdown-item" to={"/"} onClick={handleLogout}>
                        Logout
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </span>
            
          </div>
          <div>
            <span style={{ color: "orange", fontWeight: "bold" }}>{user}</span>
            </div>
        </div>
      </div>
    </div>
  );
}
