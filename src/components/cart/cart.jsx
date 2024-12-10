import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../navbar/navbar";
import "./cart.css";
import { useSelector } from "react-redux";
export function Cart(){
    let navigate=useNavigate();

    // const[data,setData]=useState(JSON.parse(localStorage.getItem("names")));

    const storedata=useSelector((state)=>state);
    const[data,setData]=useState([]);
    function handleRemoveClick(Id){
       let newdata=data.filter(item => item.id !== Id);
       setData(newdata);
       localStorage.setItem("names", JSON.stringify(newdata));
       navigate("/");
       
        
    }
   useEffect(()=>{
    setData(storedata.Array);
    console.log("Data",data);
   },[storedata.Array])
   
    // array.reduce((accumulator, currentValue, currentIndex, array) => {
    //     // function body
    // }, initialValue);
    const totalAmount = data.reduce((total, item) => total + item.price, 0).toFixed(2);
    return(
        <div>
           <NavBar/>
          <div className="cart-container">
        <div className="cart-cards-part">
          <div className="card cart-card">
            <div className="card-header cart-card-header">Cart Details</div>
            <div className="card-body cart-card-body">
              <div>
                {data.map((item) => (
                  <div className="body-part">
                    <div className="me-4"  key={item.id}>
                      <img src={item.image} />
                    </div>
                    <div>
                      <div  key={item.id}>{item.title}</div>
                      <div  key={item.id}>Price: {item.price}</div>
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
                    {" "}
                    <span className="fw-bold">Total Amount :</span>{" "}
                    {totalAmount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="checkout-part">
          <div className="border border-1 rounded-1 p-3 ">
            <div className="fs-4 mb-3">Shipping:</div>
            <div>Total Amount: &nbsp;{totalAmount}</div>
            <button className="btn btn-warning mt-3">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
        </div>
      
    )
}


