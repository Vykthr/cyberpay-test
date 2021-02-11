import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import { persistStore, persistCombineReducers } from "redux-persist";
// import storage from "redux-persist/es/storage";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const DEV = process.env.NODE_ENV !== "production";

// const persistConfig = {
//   key: "rich-oak-app",
//   storage,
// };

let middleware = [thunk]; // Redux Thunk
let composeEnhancers = compose;

if (DEV) {
  // Dev Mode middleware
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

let composers = [applyMiddleware(...middleware)];

const initStore = (initialState) => {
  // const reducer = persistCombineReducers(persistConfig, rootReducer);
  const reducer = combineReducers(rootReducer);
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(...composers)
  );
  // const persistor = persistStore(store);
  // return { store, persistor };
  return store;
};

export default initStore;
