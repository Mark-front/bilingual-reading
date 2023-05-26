import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { getProfileForm } from '../../../model/selectors/getProfileForm/getProfileForm';
import { TValidateProfileError, ValidateProfileError } from '../../../model/types/editableProfileCardSchema';
import { IProfile } from '@/entities/Profile';

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