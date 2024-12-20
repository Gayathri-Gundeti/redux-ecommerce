// import React, { useEffect, useState } from "react";
// import "./home-categories.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// export function HomeCategories() {
//   const storedata = useSelector((state) => state);
//   const email = storedata.Email;
//   const password = storedata.password;
//   const navigate = useNavigate();

//   // Check login status on component load
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     if (email && password) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, [email, password]);

//   // Handle "View more" button click
//   // function handleView(route) {
//   //   if (!isLoggedIn) {
//   //     navigate("/Login");
//   //   } else {
//   //     navigate(route);
//   //   }
//   // }
//  function handleView(route){
//   if (isLoggedIn === true) {
//     navigate(route);
//   } else {
//     navigate("/Login");
//   }
//  }
//   return (
//     <div className="category-part">
//       <h2 className="head-choose">Choose your choice</h2>
//       <div className="cards-part">
//         <div className="card category-card">
//           <div className="card-header category-header">
//             <img src="../../../images/men-shopping.jpg" alt="Men's Collection" />
//           </div>
//           <div className="card-body category-body">
//             <div
//               className="mb-2"
//               style={{ color: "orange", fontWeight: "bold" }}
//             >
//               Men's Collection
//             </div>
//             <div className="mb-2">Men New Arrival</div>
//             <div className="mb-2">Get 20% off on selected products</div>
//             <button
//               className="btn viewbtn"
//               onClick={() => handleView("/Men")}
//             >
//               View more
//             </button>
//           </div>
//         </div>

//         <div className="card category-card">
//           <div className="card-header category-header">
//             <img
//               src="../../../images/women-shopping.jpg"
//               alt="Women's Collection"
//             />
//           </div>
//           <div className="card-body">
//             <div
//               className="mb-2"
//               style={{ color: "orange", fontWeight: "bold" }}
//             >
//               Women's Collection
//             </div>
//             <div className="mb-2">Women New Arrival</div>
//             <div className="mb-2">Get 50% off on selected products</div>
//             <button
//               className="btn viewbtn"
//               onClick={() => handleView("/Women")}
//             >
//               View more
//             </button>
//           </div>
//         </div>

//         <div className="card category-card">
//           <div className="card-header category-header">
//             <img src="../../../images/electronics.jpg" alt="Electronics" />
//           </div>
//           <div className="card-body">
//             <div
//               className="mb-2"
//               style={{ color: "orange", fontWeight: "bold" }}
//             >
//               Electronics
//             </div>
//             <div className="mb-2">Electronics</div>
//             <div className="mb-2">Get 50% off on selected products</div>
//             <button
//               className="btn viewbtn"
//               onClick={() => handleView("/Electronics")}
//             >
//               View more
//             </button>
//           </div>
//         </div>

//         <div className="card category-card">
//           <div className="card-header category-header">
//             <img src="../../../images/jewelery.jpg" alt="Jewelery" />
//           </div>
//           <div className="card-body">
//             <div
//               className="mb-2"
//               style={{ color: "orange", fontWeight: "bold" }}
//             >
//               Jewelery
//             </div>
//             <div className="mb-2">New arrival Jewelery</div>
//             <div className="mb-2">Get 50% off on selected products</div>
//             <button
//               className="btn viewbtn"
//               onClick={() => handleView("/Jewelery")}
//             >
//               View more
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import "./home-categories.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function HomeCategories() {
  const storedata = useSelector((state) => state);
  const email = storedata.Email;
  const password = storedata.Password;
  const navigate = useNavigate();

 
  function handleView(route) {
    if (email && password) {
      navigate(route);
    } else {
      navigate("/Login");
    }
  }

  return (
    <div className="category-part">
      <h2 className="head-choose">Choose your choice</h2>
      <div className="cards-part">
        <div className="card category-card">
          <div className="card-header category-header">
            <img src="../../../images/men-shopping.jpg" alt="Men's Collection" />
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
            <button
              className="btn viewbtn"
              onClick={() => handleView("/Men")}
            >
              View more
            </button>
          </div>
        </div>

        <div className="card category-card">
          <div className="card-header category-header">
            <img
              src="../../../images/women-shopping.jpg"
              alt="Women's Collection"
            />
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
            <button
              className="btn viewbtn"
              onClick={() => handleView("/Women")}
            >
              View more
            </button>
          </div>
        </div>

        <div className="card category-card">
          <div className="card-header category-header">
            <img src="../../../images/electronics.jpg" alt="Electronics" />
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
            <button
              className="btn viewbtn"
              onClick={() => handleView("/Electronics")}
            >
              View more
            </button>
          </div>
        </div>

        <div className="card category-card">
          <div className="card-header category-header">
            <img src="../../../images/jewelery.jpg" alt="Jewelery" />
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
            <button
              className="btn viewbtn"
              onClick={() => handleView("/Jewelery")}
            >
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
