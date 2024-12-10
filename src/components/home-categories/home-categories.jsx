import React, { useEffect, useState } from "react";
import "./home-categories.css";
import { Link } from "react-router-dom";
import axios from "axios";


export function HomeCategories() {
  return (
    <div className="category-part">
      <h2 className="head-choose">Choose your choice</h2>
      <div className="cards-part">
        <div className="card category-card">
          <div className="card-header category-header">
            <img src="../../../images/men-shopping.jpg" />
          </div>
          <div className="card-body category-body">
            <div
              className="mb-2"
              style={{ color: "orange", fontWeight: "bold" }}
            >
              Men's Collection
            </div>
            <div className="mb-2">Men New Arrival</div>
            <div className="mb-2">Get 20% off on selected products</div>
            <Link to={"/Men"}> <button className="btn viewbtn">View more</button></Link>
          </div>
        </div>

        <div className="card category-card">
          <div className="card-header category-header">
            <img src="../../../images/women-shopping.jpg" />
          </div>
          <div className="card-body">
            <div
              className="mb-2"
              style={{ color: "orange", fontWeight: "bold" }}
            >
              Women's Collection
            </div>
            <div className="mb-2">Women New Arrival</div>
            <div className="mb-2">Get 50% off on selected products</div>
            <Link to={"/Women"}> <button className="btn viewbtn">View more</button></Link>
          </div>
        </div>

        <div className="card category-card">
          <div className="card-header category-header">
            <img src="../../../images/electronics.jpg" />
          </div>
          <div className="card-body">
            <div
              className="mb-2"
              style={{ color: "orange", fontWeight: "bold" }}
            >
              Electronics
            </div>
            <div className="mb-2">Electronics</div>
            <div className="mb-2">Get 50% off on selected products</div>
            <Link to={"/Electronics"}> <button className="btn viewbtn">View more</button></Link>
          </div>
        </div>

        <div className="card category-card">
          <div className="card-header category-header">
            <img src="../../../images/jewelery.jpg" />
          </div>
          <div className="card-body">
            <div
              className="mb-2"
              style={{ color: "orange", fontWeight: "bold" }}
            >
              Jewelery
            </div>
            <div className="mb-2">New arrival Jewelery</div>
            <div className="mb-2">Get 50% off on selected products</div>
            <Link to={"/Jewelery"}> <button className="btn viewbtn">View more</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
