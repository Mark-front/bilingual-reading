import {StateSchema} from '@/app/providers/StoreProvider';
import {getProfileValidateErrors} from './getProfileValidateErrors';
import {ValidateProfileError} from '@/entities/Profile';

describe('getProfileValidateErrors.test', () => {
    test('should return isLoading', () => {

        const validateErrors = [
            ValidateProfileError.DATA_NOT_FOUND,
            ValidateProfileError.INCORRECT_AGE,
        ]

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors,
            },
        } as StateSchema

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    })
})
