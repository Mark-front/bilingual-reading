import { ILoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<ILoginSchema> = {
            username: 'admin',
        }

        expect(loginReducer(
            state as ILoginSchema,
            loginActions.setUsername('123')
        )).toEqual({ username: '123' })
    });

    test('test set password', () => {
        const state: DeepPartial<ILoginSchema> = {
            password: '123',
        }

        expect(loginReducer(
            state as ILoginSchema,
            loginActions.setPassword('321')
        )).toEqual({ password: '321' })
    });
})