import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from '@/app/providers/StoreProvider';
import {getLoginState} from './getLoginState';

describe('getLoginState.test', () => {
    test('should return loginForm', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'admin123',
                username: 'admin',
                error: undefined,
                isLoading: false,
            },
        }

        expect(getLoginState(state as StateSchema)).toEqual({
            password: 'admin123',
            username: 'admin',
            error: undefined,
            isLoading: false,
        })
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    })
})
