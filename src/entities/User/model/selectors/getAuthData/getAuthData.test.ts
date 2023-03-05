import {DeepPartial} from '@reduxjs/toolkit';
import {getUserAuthData} from './getAuthData';
import {StateSchema} from '@/app/providers/StoreProvider';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    username: 'user',
                    id: '1',
                },
            },
        }

        expect(getUserAuthData(state as StateSchema)).toEqual({id: '1', username: 'user'})
    })
})