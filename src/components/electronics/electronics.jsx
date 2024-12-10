import axios from "axios";
import React, { useEffect, useState } from "react";
import "./electronics.css";
import { NavBar } from "../navbar/navbar";
import { useNavigate } from "react-router-dom";
export function Electronics(){
    const[data,setData]=useState([]);
    const[load,setLoad]=useState(false);
    let navigate=useNavigate();
    function LoadProducts(){
        setLoad(true);
        axios.get("https://fakestoreapi.com/products/category/electronics")
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
        <div className="electronics-container">
            <NavBar/>
            <div>
                <h3>Electronics Category</h3>
                {/* <h3 style={{textAlign:'center',color:'orange'}}>{load}</h3> */}
                {load && <div className="loader"></div>}
            </div>
            <div className="electronics-card-part">
                {
                  data.map((item)=><div className="card electronics-card">
                    <div className="card-header electronics-card-header">
                        <img src={item.image} />
                    </div>
                    <div className="card-body electronics-card-body">
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