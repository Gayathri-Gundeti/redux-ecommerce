import React from "react";
import "./footer.css";
export function Footer(){
    return(
        <div className="footer">
            <div className="column">
                <img src="../../../images/logo-cart.jpg"/>
            </div>
            <div className="column">
               <span style={{color:'orange'}}>Contact Us</span>
               <span>Hyderbad, Telangana</span>
               <span>Email: shopnow@gmail.com</span>
               <span>Phone: +91 9876545436</span>
            </div>
            <div className="column">
                <span style={{color:'orange'}} className="column-follow">Follow Us</span>
                 <div className="d-flex">
                 <span className="bi bi-instagram me-4"></span>
                <span className="bi bi-twitter me-4"></span>
                <span className="bi bi-facebook me-4"></span>
                <span className="bi bi-linkedin me-4"></span>
                 </div>

            </div>

        </div>
    )
}