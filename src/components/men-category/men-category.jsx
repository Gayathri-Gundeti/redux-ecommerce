import React, { useEffect, useState } from "react";
import axios from "axios";
import "./men-category.css";
import { NavBar } from "../navbar/navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../../redux/store";

export function MenCategory() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
   
  const navigate = useNavigate();

  function LoadProducts() {
    setLoad(true);
    axios
      .get("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((response) => {
        setLoad(false);
        setData(response.data);
      });
  }

  function handleAddClick(item) {
    dispatch(addItem(item));
    console.log("Added item:", item);
    navigate("/Cart");
  }

 

  useEffect(() => {
    LoadProducts();
  }, []);

  return (
    <div className="men-container">
      <NavBar />
    
      <div>
        <h3>Men's Category</h3>
        {load && <div className="loader"></div>}
      </div>
      <div className="men-card-part">
        {data.map((item) => (
          <div className="card men-card" key={item.id}>
            <div className="card-header men-card-header">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="card-body men-card-body">
              <div>
                <span className="fw-bold">Title:</span> {item.title}
              </div>
              <div>
                <span className="fw-bold">Price:</span> {item.price}
              </div>
              <div>
                <span className="fw-bold">Description:</span>{" "}
                {item.description}
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn w-100"
                style={{ backgroundColor: "orange", color: "white" }}
                onClick={() => handleAddClick(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
