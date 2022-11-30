import { createSlice } from "@reduxjs/toolkit";

export const tambahkurang = createSlice({
    name:'tambahkurang',
    initialState:{
        title: "",
        completed: false
    },
    reducers:{
        tambah(state){
            state.title +=1;
            state.completed +=1;
        },
        kurang(state){
            state.title -=1;
        }
    }
});

export const {actions} = tambahkurang;
export const {tambah,kurang} = actions;