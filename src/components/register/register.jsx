// import React, { useState } from "react";
// import "./register.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { Emailfn, Namefn, Passwordfn } from "../../redux/store";
// export function Register(){
//     const dispatch=useDispatch();
//     const[name,setName]=useState("");
//     const[email,setEmail]=useState("");
//     const[password,setPassword]=useState("");

//     const[nameerror,setNameerror]=useState("");
//     const[emailerror,setEmailerror]=useState("");
//     const[passworderror,setPassworderror]=useState("");

//     let navigate=useNavigate();
//     function handleName(e){
//         setName(e.target.value);
//         console.log(name);

//     }
//     function handleEmail(e){
//         setEmail(e.target.value);
//         console.log(email)
//     }
//     function handlePassword(e){
//         setPassword(e.target.value);
//         console.log(password);
//     }
//     function handleRegister(){
//         if(name.length===0){
//           setNameerror("Name Required");
//         }else if(name.length<4){
//             setNameerror("Name is too short");
//         }else{
//             setNameerror("");
//             // localStorage.setItem('Name',name);
//             dispatch(Namefn(name));
//         }
//     if(email.length===0){
//         setEmailerror("Email required");
//     }else{
//         setEmailerror("");
//         // localStorage.setItem('Email',email);
//         dispatch(Emailfn(email));
//     }
//     if(password.length===0){
//         setPassworderror("Password required");
//     }else if(password.length<4){
//         setPassworderror("Password is too short");
//     }else{
//         setPassworderror("");
//         // localStorage.setItem('Password',password);
//         dispatch(Passwordfn(password));
//     }
//     alert("Register Successfull..");
//     navigate("/Login");
//     }
//     return(
//         <div className="register-container">
//             <div className="register-form">
//                 <div className="register-logo">
//                     <img src="../../../images/logo-cart.jpg"/>
//                     <span>ShopNow</span>
//                 </div>
//                 <div className="register-data">
//                     <div>
//                     <div className="mt-2 mb-1">Full Name</div>
//                     <div><input type="text" placeholder="Enter Name" className="form-control" onChange={handleName}/></div>
//                     <div className="text-danger">{nameerror}</div>
//                     </div>
//                     <div>
//                         <div className="mt-2 mb-1">Email</div>
//                         <div><input type="email" placeholder="Enter Email" className="form-control" onChange={handleEmail}/></div>
//                         <div className="text-danger">{emailerror}</div>
//                     </div>
//                     <div>
//                         <div className="mt-2 mb-1">Password</div>
//                         <div><input type="password" placeholder="Enter Password" className="form-control" onChange={handlePassword}/></div>
//                         <div className="text-danger">{passworderror}</div>
//                     </div>
//                     <div>
//                         <button className="btn w-100 mt-3 mb-2" style={{backgroundColor:"orange",color:"white"}} onClick={handleRegister}>Register</button>
//                     </div>
//                     <div>
//                         {/* <Link to={"/Login"}>Already have an account? Login</Link> */}
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }
// import React, { useState } from "react";
// import "./register.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { EMAIL, NAME, PASSWORD } from "../../redux/store";

// export function Register() {
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [nameerror, setNameerror] = useState("");
//   const [emailerror, setEmailerror] = useState("");
//   const [passworderror, setPassworderror] = useState("");

//   let navigate = useNavigate();

//   function handleName(e) {
//     setName(e.target.value);
//   }

//   function handleEmail(e) {
//     setEmail(e.target.value);
//   }

//   function handlePassword(e) {
//     setPassword(e.target.value);
//   }

//   function handleRegister() {
//     // Validate name
//     if (name.length === 0) {
//       setNameerror("Name Required");
//     } else if (name.length < 4) {
//       setNameerror("Name is too short");
//     } else {
//       setNameerror("");
//       dispatch(NAME(name)); // Dispatch name
//     }

//     // Validate email
//     if (email.length === 0) {
//       setEmailerror("Email required");
//     } else {
//       setEmailerror("");
//       dispatch(EMAIL(email)); // Dispatch email
//     }

//     // Validate password
//     if (password.length === 0) {
//       setPassworderror("Password required");
//     } else if (password.length < 4) {
//       setPassworderror("Password is too short");
//     } else {
//       setPassworderror("");
//       dispatch(PASSWORD(password)); // Dispatch password
//     }

//     // If no errors, navigate to login
//     if (!nameerror && !emailerror && !passworderror) {
//       alert("Registration Successful");
//       navigate("/Login");
//     }
//   }

//   return (
//     <div className="register-container">
//       <div className="register-form">
//         <div className="register-logo">
//           <img src="../../../images/logo-cart.jpg" alt="ShopNow Logo" />
//           <span>ShopNow</span>
//         </div>
//         <div className="register-data">
//           <div>
//             <div className="mt-2 mb-1">Full Name</div>
//             <div>
//               <input
//                 type="text"
//                 placeholder="Enter Name"
//                 className="form-control"
//                 onChange={handleName}
//               />
//             </div>
//             <div className="text-danger">{nameerror}</div>
//           </div>
//           <div>
//             <div className="mt-2 mb-1">Email</div>
//             <div>
//               <input
//                 type="email"
//                 placeholder="Enter Email"
//                 className="form-control"
//                 onChange={handleEmail}
//               />
//             </div>
//             <div className="text-danger">{emailerror}</div>
//           </div>
//           <div>
//             <div className="mt-2 mb-1">Password</div>
//             <div>
//               <input
//                 type="password"
//                 placeholder="Enter Password"
//                 className="form-control"
//                 onChange={handlePassword}
//               />
//             </div>
//             <div className="text-danger">{passworderror}</div>
//           </div>
//           <div>
//             <button
//               className="btn w-100 mt-3 mb-2"
//               style={{ backgroundColor: "orange", color: "white" }}
//               onClick={handleRegister}
//             >
//               Register
//             </button>
//           </div>
//           <div>
//             {/* <Link to={"/Login"}>Already have an account? Login</Link> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Emailfn, Namefn, Passwordfn } from "../../redux/store";
export function Register(){
    const dispatch=useDispatch();
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const[nameerror,setNameerror]=useState("");
    const[emailerror,setEmailerror]=useState("");
    const[passworderror,setPassworderror]=useState("");

    let navigate=useNavigate();
    function handleName(e){
        setName(e.target.value);
        console.log(name);

    }
    function handleEmail(e){
        setEmail(e.target.value);
        console.log(email)
    }
    function handlePassword(e){
        setPassword(e.target.value);
        console.log(password);
    }
    function handleRegister(){
        if(name.length===0){
          setNameerror("Name Required");
        }else if(name.length<4){
            setNameerror("Name is too short");
        }else{
            setNameerror("");
            // localStorage.setItem('Name',name);
            dispatch(Namefn(name));
        }
    if(email.length===0){
        setEmailerror("Email required");
    }else{
        setEmailerror("");
        // localStorage.setItem('Email',email);
        dispatch(Emailfn(email));
    }
    if(password.length===0){
        setPassworderror("Password required");
    }else if(password.length<4){
        setPassworderror("Password is too short");
    }else{
        setPassworderror("");
        // localStorage.setItem('Password',password);
        dispatch(Passwordfn(password));
    }
    alert("Register Successfull..");
    navigate("/Login");
    }
    return(
        <div className="register-container">
            <div className="register-form">
                <div className="register-logo">
                    <img src="../../../images/logo-cart.jpg"/>
                    <span>ShopNow</span>
                </div>
                <div className="register-data">
                    <div>
                    <div className="mt-2 mb-1">Full Name</div>
                    <div><input type="text" placeholder="Enter Name" className="form-control" onChange={handleName}/></div>
                    <div className="text-danger">{nameerror}</div>
                    </div>
                    <div>
                        <div className="mt-2 mb-1">Email</div>
                        <div><input type="email" placeholder="Enter Email" className="form-control" onChange={handleEmail}/></div>
                        <div className="text-danger">{emailerror}</div>
                    </div>
                    <div>
                        <div className="mt-2 mb-1">Password</div>
                        <div><input type="password" placeholder="Enter Password" className="form-control" onChange={handlePassword}/></div>
                        <div className="text-danger">{passworderror}</div>
                    </div>
                    <div>
                        <button className="btn w-100 mt-3 mb-2" style={{backgroundColor:"orange",color:"white"}} onClick={handleRegister}>Register</button>
                    </div>
                    <div>
                        {/* <Link to={"/Login"}>Already have an account? Login</Link> */}
                    </div>
                </div>

            </div>
        </div>
    )
}