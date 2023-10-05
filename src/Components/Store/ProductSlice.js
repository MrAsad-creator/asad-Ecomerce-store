import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const ResponseState={
    data:[],
};
const ProductSlice=createSlice({
    name:'products',
    initialState:ResponseState,
    reducers:{
     FetchingProducts(state,action){
        state.data=action.payload;
     }
    }
});
export const {FetchingProducts}=ProductSlice.actions;
export default ProductSlice.reducer;


export function gettingProducts(){
    return async  function getProductThunk(dispatch,getProduct){
        const GettingProducts = await axios.get(
            "https://fakestoreapi.com/products"
          );
          console.log("=== Products response ===", GettingProducts);
          dispatch(FetchingProducts(GettingProducts.data))
        //   setGetProducts(GettingProducts.data);
        // console.warn(" == State Data ===", getProducts);
    }
}