// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { NavBar } from "../navbar/navbar";
// import "./cart.css";
// import { useNavigate } from "react-router-dom";

// // Action to remove item from the cart
// const removeItem = (id) => ({
//   type: "REMOVE_ITEM",
//   payload: id,
// });

// export function Cart() {
//   const cart = useSelector((state) => state.cart); // Select cart data from Redux store
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   function handleRemoveClick(id) {
//     dispatch(removeItem(id)); // Dispatch action to remove item
//     navigate("/");
//   }

//   const totalAmount = cart
//     .reduce((total, item) => total + item.price, 0)
//     .toFixed(2);

//   return (
//     <div>
//       <NavBar />
//       <div className="cart-container">
//         <div className="cart-cards-part">
//           <div className="card cart-card">
//             <div className="card-header cart-card-header">Cart Details</div>
//             <div className="card-body cart-card-body">
//               <div>
//                 {cart.map((item) => (
//                   <div className="body-part" key={item.id}>
//                     <div className="me-4">
//                       <img src={item.image} alt={item.title} />
//                     </div>
//                     <div className="card-text">
//                       <div>{item.title}</div>
//                       <div>Price: {item.price}</div>
//                     </div>
//                     <div>
//                       <button
//                         className="btn btn-danger"
//                         onClick={() => handleRemoveClick(item.id)}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//                 <div className="card-footer">
//                   <span className="float-end">
//                     <span className="fw-bold">Total Amount :</span> {totalAmount}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="checkout-part">
//           <div className="border border-1 rounded-1 p-3 ">
//             <div className="fs-4 mb-3">Shipping:</div>
//             <div>Total Amount: &nbsp;{totalAmount}</div>
//             <button className="btn btn-warning mt-3">
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { NavBar } from "../navbar/navbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const removeItem = (id) => ({
  type: "REMOVE_ITEM",
  payload: id,
});

export function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleRemoveClick(id) {
    dispatch(removeItem(id)); // Dispatch action to remove item
    navigate("/Cart");
  }

  const totalAmount = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);
  return (
    <div>
      <NavBar />
      <div className="bg-cart">
        <div className="sub-bg-cart">
          <div className="left-side">
            <span className="title-shop">Shopping cart</span>
            <div>
              {cart.map((item) => (
                <div className="cards-body">
                  <div>
                    <img src={item.image} />
                  </div>
                  <div className="res-close">
                  <div>
                    <div>{item.title}</div>
                    <div>
                      <span className="fw-bold">Price:</span>&nbsp; ₹ {item.price}
                    </div>
                  </div>
                  <div
                    className="btn btn-close ms-4 ps-5 fs-18"
                    onClick={() => handleRemoveClick(item.id)}
                  ></div>
                    </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right-side">
            <div className="summary-title">Summary</div>
            <div className="mt-4">
              <div>SHIPPING</div>
              <div>
                <input type="text" className="form-control" value={"Standard-Delivery"} />
              </div>
            </div>
            <div className="mt-4">
              <div>GIVE CODE</div>
              <div>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="mt-4">
              <span><span className="fw-bold">Total Price:</span> &nbsp; ₹ {totalAmount}</span>
              <span></span>
            </div>
            <div>
              <button className="btn btn-warning mt-2 w-100">Check out</button>
            </div>
            <div className="mt-4">
             <Link to="/">Back to shop</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
