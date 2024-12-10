import axios from "axios";
import React, { useEffect, useState } from "react";
import "./women-category.css";
import { NavBar } from "../navbar/navbar";
import { Link, useNavigate } from "react-router-dom";
export function WomenCategory(){
    const[data,setData]=useState([]);
    const[load,setLoad]=useState(false);
    let navigate=useNavigate();
    function LoadProducts(){
        setLoad(true);
        axios.get("https://fakestoreapi.com/products/category/women's%20clothing")
        .then(response=>{
            setLoad(false);
            setData(response.data);
        })
    }
   
    function handleAddClick(item) {
        let arr = JSON.parse(localStorage.getItem("names")) || [];
        arr = [...arr, item];
        localStorage.setItem("names", JSON.stringify(arr));
        navigate("/Cart");
        
    }
    useEffect(()=>{
        LoadProducts();
        
    },[])
    return(
        <div className="women-container">
            <NavBar/>
            <div>
                <h3>Women's Category</h3>
                {/* <h3 style={{textAlign:'center',color:'orange'}}>{load}</h3> */}
                {load && <div className="loader"></div>}
            </div>
            <div className="women-card-part">
                {
                  data.map((item)=><div className="card women-card">
                    <div className="card-header women-card-header">
                        <img src={item.image} />
                    </div>
                    <div className="card-body women-card-body">
                        <div><span className="fw-bold">Title</span>{item.title}</div>
                        <div><span className="fw-bold">Price</span>{item.price}</div>
                        <div><span className="fw-bold">Description</span>{item.description}</div>
                        </div>
                    <div className="card-footer">
                    <button className="btn w-100" style={{backgroundColor:'orange',color:'white'}} onClick={()=>handleAddClick(item)}>Add Cart</button>
                            </div>
                          
                  </div>)
                }
            </div>
        </div>
    )
}