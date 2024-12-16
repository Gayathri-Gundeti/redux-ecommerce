import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../navbar/navbar";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromCart } from "../../redux/store";

export function Cart() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.app.Array || []);

  function handleRemoveClick(itemId) {
    dispatch(RemoveFromCart(itemId));
  }

  // useEffect(() => {
  //   const MappedData = cartItems.map((item) => item.items);
  //   setData(MappedData);
  //   console.log("Updated Cart Data", MappedData);
  // }, [cartItems]);

  // const totalAmount = Array.isArray(data)
  //   ? data.reduce((total, item) => total + (item.price || 0), 0).toFixed(2)
  //   : "0.00";

  const totalAmount = cartItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2); // Calculate total

  return (
    <div>
      <NavBar />
      <div className="cart-container">
        <div className="cart-cards-part">
          <div className="card cart-card">
            <div className="card-header cart-card-header">Cart Details</div>
            <div className="card-body cart-card-body">
              {cartItems.map((item) => (
                <div className="body-part" key={item.id}>
                  <div className="me-4">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div>Price: {item.price}</div>
                  </div>
                  <div>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveClick(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="card-footer">
                <span className="float-end">
                  <span className="fw-bold">Total Amount :</span> {totalAmount}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="checkout-part">
          <div className="border border-1 rounded-1 p-3">
            <div className="fs-4 mb-3">Shipping:</div>
            <div>Total Amount: &nbsp;{totalAmount}</div>
            <button className="btn btn-warning mt-3">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
