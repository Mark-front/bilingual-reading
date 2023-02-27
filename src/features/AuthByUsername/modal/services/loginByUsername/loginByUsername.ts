import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {IUser} from '@/entities/User';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<IUser>(
                'http://localhost:8000/login',
                authData
            )
            console.log(response.data)
            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('error')
        }
    }
)