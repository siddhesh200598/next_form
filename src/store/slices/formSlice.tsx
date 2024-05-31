import { createSlice } from "@reduxjs/toolkit";
import { FormProps } from '../../components/form/form';

export const formSlice = createSlice({
  name: "data",
  initialState: [] as FormProps[],
  reducers: {
    addDataObject(state, action) {
        if(action?.payload){
            state.push(action.payload as FormProps);
        }
    },
    addNewDataObject(state, action) {
        if(action?.payload){
            const index = localStorage.getItem('index') || 0;
            const newArr = JSON.parse(JSON.stringify(state));
            newArr[index] = action?.payload;
            localStorage.removeItem("index");
            return newArr;
        }
    },
    updateDataObject(state, action) {
        if(action?.payload){
            state.splice(action.payload, 1);
        }
    },
  },
});

export const { addDataObject, updateDataObject, addNewDataObject } = formSlice.actions;
export const formReducer = formSlice.reducer;