import { IAddCommentSchema } from '../types/addCommentSchema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IAddCommentSchema = {
    text: '',
}
export const addCommentSlice = createSlice({
    name: 'addComment',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
})

export const { actions: addCommentActions } = addCommentSlice
export const { reducer: addCommentReducer } = addCommentSlice
