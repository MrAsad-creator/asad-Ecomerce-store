import {createSlice} from '@reduxjs/toolkit';

const cartState=[];
const CartSlice=createSlice({
    name:'cart',
    initialState:cartState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
           return state.filter(item=>item?.id !== action.payload)
        }
    }
});
export const {add,remove}=CartSlice.actions;
export default CartSlice.reducer;