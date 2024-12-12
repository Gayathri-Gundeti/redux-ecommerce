import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default storage is localStorage for web
import { combineReducers } from "redux";

// Action Creators
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

export function Addcart(Array) {
  return {
    type: "Array",
    payload: [Array], // Ensure `items` is an array
  };
}

export function Logout() {
  return {
    type: "Logout",
  };
}

export function Removecart(Newdata) {
  return {
    type: "Removecart",
    payload: { Newdata },
  };
}

// Initial State
const initialState = {
  Name: "",
  Email: "",
  Password: "",
  Array: [], // Stores cart items
  Logout: "",
  Newdata: [],
};

// Reducer
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
      return {
        ...state,
        // Array: [...state.Array, ...action.payload.Array],
         // Concatenate existing and new items
         Array:action.payload.Array,
      };
    case "Removecart":
      return {
        ...state,
        Newdata: action.payload.Newdata,
      };
    case "Logout":
      return initialState; // Reset state on logout
    default:
      return state;
  }
}

// Persist Config
const persistConfig = {
  key: "root", // Key for the persisted state
  storage, // Storage type
};

// Combine Reducers (useful for scalability)
const rootReducer = combineReducers({
  app: ReducerFn,
});

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store
const store = createStore(persistedReducer);

// Persistor
export const persistor = persistStore(store);

export default store;

// import { createStore, applyMiddleware } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Default storage is localStorage for web
// import { combineReducers } from "redux";
// import { thunk } from "redux-thunk"; // Import redux-thunk

// // Action Creators
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

// // Async Addcart action with redux-thunk
// export function Addcart(items) {
//   return (dispatch) => {
//     // Example async operation, simulate with setTimeout
//     setTimeout(() => {
//       dispatch({
//         type: "Addcart",
//         payload: [items], // Ensure items are added as an array
//       });
//     }, 500); // Simulate async operation (e.g., API call)
//   };
// }

// export function Logout() {
//   return {
//     type: "Logout",
//   };
// }

// export function Removecart(Newdata) {
//   return {
//     type: "Removecart",
//     payload: { Newdata },
//   };
// }

// // Initial State
// const initialState = {
//   Name: "",
//   Email: "",
//   Password: "",
//   Array: [], // Stores cart items
//   Logout: "",
//   Newdata: [],
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
//     case "Addcart":
//       return {
//         ...state,
//         Array: [...state.Array, ...action.payload], // Concatenate new items with existing items
//       };
//     case "Removecart":
//       return {
//         ...state,
//         Newdata: action.payload.Newdata,
//       };
//     case "Logout":
//       return initialState; // Reset state on logout
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

// // Store with redux-thunk middleware
// const store = createStore(
//   persistedReducer,
//   applyMiddleware(thunk) // Apply redux-thunk middleware
// );

// // Persistor
// export const persistor = persistStore(store);

// export default store;
