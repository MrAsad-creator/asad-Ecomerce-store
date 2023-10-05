import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";
const store=configureStore({
    reducer:{
        card:CartSlice,
        Products:ProductSlice,
    }
});
export default store;