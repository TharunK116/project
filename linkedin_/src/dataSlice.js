import { createSlice } from '@reduxjs/toolkit';
import UserData from './organisms/UserData';

const initialState = { 
    data: UserData  // Ensure UserData has a valid structure
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        dataAdded: (state, action) => {
            const { type, item } = action.payload;
            if (state.data[type]) {
                state.data[type].push(item);
            } else {
                console.error(`Invalid type: ${type}`);
            }
        },
        dataUpdated: (state, action) => {
            const { type, item } = action.payload;
            if (!state.data[type]) return;
           if(type==='profile'){
             state.data[type]=item;
             return ;
           }
           
            state.data[type] = state.data[type].map(info => 
                info.id === item.id ? item : info
            ); 
        }
        
    }
});

export const { dataAdded,dataUpdated} = dataSlice.actions;
export default dataSlice.reducer;
