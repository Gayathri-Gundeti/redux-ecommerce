import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Removecart } from "../../redux/store"; // Assuming Removecart works as intended
import { NavBar } from "../navbar/navbar";
import "./cart.css";

export function Cart() {
  const storedata = useSelector((state) => state.app); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const [data, setData] = useState([]);

  
  useEffect(() => {
    setData(storedata.Array || []); 
    console.log("data",data);
  }, [storedata.Array]); 

 
  function handleRemoveClick(Id) {
    const updatedData = data.filter((item) => item.id !== Id);
    setData(updatedData); 
    dispatch(Removecart(updatedData)); 
  }

  // Calculate total amount
  const totalAmount = data.reduce(
    (total, item) => total + item.price,
    0
  ).toFixed(2);

  return (
    <div>
      <NavBar />
      <div className="cart-container">
        <div className="cart-cards-part">
          <div className="card cart-card">
            <div className="card-header cart-card-header">Cart Details</div>
            <div className="card-body cart-card-body">
              {data.length > 0 ? (
                data.map((item) => (
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
                ))
              ) : (
                <div className="empty-cart">Your cart is empty!</div>
              )}
            </div>
            <div className="card-footer">
              <span className="float-end">
                <span className="fw-bold">Total Amount: </span>${totalAmount}
              </span>
            </div>
          </div>
        </div>

        <div className="checkout-part">
          <div className="border border-1 rounded-1 p-3">
            <div className="fs-4 mb-3">Shipping:</div>
            <div>Total Amount: &nbsp;${totalAmount}</div>
            <button
              className="btn btn-warning mt-3"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
