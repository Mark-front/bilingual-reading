import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../../../../entities/Profile/model/types/profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { updateProfileData } from '@/entities/Profile';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};
describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        }

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true)
        )).toEqual({ readonly: true })
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        };


        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()
        )).toEqual({
            readonly: true,
            ValidateErrors: undefined,
            data,
            form: data,
        })
    });

    test('test set update', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: data,
        }

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ username: 'newUsername' })
        )).toEqual({
            form: { ...data, username: 'newUsername' },
        })
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            error: ValidateProfileError.SERVER_NOT_RESPONSE,
        }

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending
        )).toEqual({
            isLoading: true,
            error: undefined,
        })
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        }

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            data,
            form: data,
        })
    });

})