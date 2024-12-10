import { createStore } from "redux";
export function Namefn(Name) {
  return {
    type: "Namefn",
    payload: { Name },
  };
}
export function Emailfn(Email) {
  return {
    type: "Emailfn",
    payload: { Email },
  };
}
export function Passwordfn(Password) {
  return {
    type: "Passwordfn",
    payload: { Password },
  };
}
export function Addcart(Array){
  return{
    type:"Addcart",
    payload:{Array},
  }
}
const initialState = {
  Name: "",
  Email: "",
  Password: "",
  Array:[],
};
function ReducerFn(state = initialState, action) {
  switch (action.type) {
    case "Namefn":
      return {
        ...state,
        Name: action.payload.Name,
      };
    case "Emailfn":
      return {
        ...state,
        Email: action.payload.Email,
      };
    case "Passwordfn":
      return {
        ...state,
        Password: action.payload.Password,
      };
    case "Addcart":
      return{
        ...state,
        Array: [...state.Array, action.payload],
        
      }
    default:
      return state;
  }
}
const store = createStore(ReducerFn);
export default store;
