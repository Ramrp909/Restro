import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import Store from './store';
import reducer from './Reducer'
const middleware = [thunk];

const Store = configureStore({
  reducer : reducer,
  composeWithDevTools: composeWithDevTools(applyMiddleware(...middleware))
}
)

export default Store
