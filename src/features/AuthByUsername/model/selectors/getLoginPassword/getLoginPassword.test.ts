import {StateSchema} from '@/app/providers/StoreProvider';
import {getLoginPassword} from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'admin123',
            },
        }

        expect(getLoginPassword(state as StateSchema)).toEqual('admin123')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual(undefined);
    })
})
