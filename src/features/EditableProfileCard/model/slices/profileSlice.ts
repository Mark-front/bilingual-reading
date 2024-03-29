import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../../model/types/editableProfileCardSchema';
import { IProfile } from '@/entities/Profile';

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
}
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.validateErrors = undefined;
            state.form = state.data
        },
        updateProfile: (state, action: PayloadAction<IProfile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        saveProfile: (state) => {
            state.readonly = true;
            state.data = {
                ...state.form,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            // fetchProfileData
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
                state.isLoading = false;
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            // updateProfileData
            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
                state.isLoading = false;
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = ValidateProfileError.SERVER_NOT_RESPONSE;
            })
    },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
