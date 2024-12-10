import React from "react";
import "./home-collection.css";
export function HomeCollection(){
    return(
        <div >
            <div className="shop-title">
                <img src="../../../images/logo-cart.jpg"/>
                <p><span style={{color:'gray',fontWeight:'bold'}}>ShopNow</span> Special Collection</p>
            </div>
            <div className="collection-card-part">
                <div className="card collection-card">
                    <div className="card-header">
                       <img src="../../../images/women-fashion.webp"/> 
                    </div>
                    <div className="card-body">
                     <p>Women Fashion</p>
                    </div>

                </div>
                <div className="card collection-card">
                    <div className="card-header">
                       <img src="../../../images/mobiles.jpg"/> 
                    </div>
                    <div className="card-body">
                     <p>Mobiles</p>
                    </div>

                </div>
                <div className="card collection-card">
                    <div className="card-header">
                       <img src="../../../images/home-app.jpg"/> 
                    </div>
                    <div className="card-body">
                     <p>Home Appliance</p>
                    </div>

                </div>

                <div className="card collection-card">
                    <div className="card-header">
                       <img src="../../../images/men-fashion.jpg"/> 
                    </div>
                    <div className="card-body">
                     <p>Men Fashion</p>
                    </div>

                </div>

                <div className="card collection-card">
                    <div className="card-header">
                       <img src="../../../images/electronics.jpg"/> 
                    </div>
                    <div className="card-body">
                     <p>Electronics</p>
                    </div>

                </div>

                <div className="card collection-card">
                    <div className="card-header">
                       <img src="../../../images/footwear.jpg"/> 
                    </div>
                    <div className="card-body">
                     <p>Footwear</p>
                    </div>

                </div>
                
                
            </div>
            


        </div>
    )
}