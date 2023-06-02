import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationsButtonSchema } from '../types/NotificationsButtonSchema';

const initialState: NotificationsButtonSchema = {
    
};

export const NotificationsButtonSlice = createSlice({
    name: 'NotificationsButton',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: NotificationsButtonActions } = NotificationsButtonSlice;
export const { reducer: NotificationsButtonReducer } = NotificationsButtonSlice;