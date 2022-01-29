import { configureStore } from '@reduxjs/toolkit';
import uiReducer from "./ui-slice";
import cartReducer from "./cart-slice";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = configureStore({ reducer: { ui: uiReducer, cart: cartReducer } }, composeWithDevTools());

export default store;