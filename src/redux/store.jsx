// import { createStore } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import { combineReducers } from "redux";
// import storage from "redux-persist/lib/storage"; // Default storage is localStorage for web

// // Action creators
// export function Namefn(Name) {
//   return {
//     type: "Namefn",
//     payload: { Name },
//   };
// }
// export function Emailfn(Email) {
//   return {
//     type: "Emailfn",
//     payload: { Email },
//   };
// }
// export function Passwordfn(Password) {
//   return {
//     type: "Passwordfn",
//     payload: { Password },
//   };
// }
// // export function Addcart(item) {
// //   return {
// //     type: "Addcart",
// //     payload: {item}, // Payload is a single item
// //   };
// // }
// export function ARRAY(arr) {
//   return {
//     type: "ARRAY",
//     payload: { arr },
//   };
// }

// // export function RemoveFromCart(itemId) {
// //   return {
// //     type: "RemoveFromCart",
// //     payload: itemId, // Payload is the ID of the item to remove
// //   };
// // }

// // Initial state
// const initialState = {
//   Name: "",
//   Email: "",
//   Password: "",
//   ARRAY: [],
// };

// // Reducer
// function ReducerFn(state = initialState, action) {
//   switch (action.type) {
//     case "Namefn":
//       return {
//         ...state,
//         Name: action.payload.Name,
//       };
//     case "Emailfn":
//       return {
//         ...state,
//         Email: action.payload.Email,
//       };
//     case "Passwordfn":
//       return {
//         ...state,
//         Password: action.payload.Password,
//       };
//     // case "Addcart":
//     //   return {
//     //     ...state,
//     //     item: action.payload.item,
//     //   };
//     case "ARRAY":
//       return {
//           ...state,
//           ARRAY: action.payload.arr,
//         };
//     // case "RemoveFromCart":
//     //   return {
//     //     ...state,
//     //     Array: state.Array.filter((item) => item.id !== action.payload), 
//     //   };
//     default:
//       return state;
//   }
// }

// // Persist Config
// const persistConfig = {
//   key: "root", // Key for the persisted state
//   storage, // Storage type
// };

// // Combine Reducers (useful for scalability)
// const rootReducer = combineReducers({
//   app: ReducerFn,
// });

// // Persisted Reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Store
// const store = createStore(persistedReducer);

// // Persistor
// export const persistor = persistStore(store);

// export default store;


import { createStore } from "redux";
export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};
export const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};
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
const initialState = {
  cart: [], 
  Name: "",
  Email: "",
  Password: "",

};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
      case "REMOVE_ITEM":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
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
    default:
      return state;
  }
}

export const store = createStore(cartReducer);
