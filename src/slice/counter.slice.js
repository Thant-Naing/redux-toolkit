import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
};

const counterSlice = createSlice({
    name : "counter",
    initialState:initialState,
    reducers : {
        increase : (state) => {  state.value += 1},               // return မလို action ခွဲစ၇ာမလို   

        decrease : (state) => {  state.value -= 1} ,                  // return မလို action ခွဲစ၇ာမလို   

       increasePayLoad : (state,action) =>  { state.value += action.payload}
    }


});

 export const {increase,decrease,increasePayLoad} = counterSlice.actions ;           //  counterSlice ထဲက မူလ action တွေပြန်ရ

export default counterSlice.reducer;