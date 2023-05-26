import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    IProfile,
    TValidateProfileError,
    ValidateProfileError,
} from '../../../../../entities/Profile/model/types/profile';
import { getProfileForm } from '@/entities/Profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<TValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            getState,
        } = thunkAPI;

        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<IProfile>(
                '/profile/' + formData?.id,
                formData
            );

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue([ ValidateProfileError.SERVER_NOT_RESPONSE ])
        }
    }
)