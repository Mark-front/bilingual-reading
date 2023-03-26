import {StateSchema} from '@/app/providers/StoreProvider';
import {getProfileForm} from './getProfileForm';
import {Currency} from '@/entities/Currency';

describe('getProfileForm.test', () => {
    test('should return isLoading', () => {
        const form = {
            age: 22,
            country: 'Armenia',
            username: 'admin',
            first: 'John',
            lastname: 'Doe',
            currency: Currency.USD,
            city: 'Москва',
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        } as StateSchema

        expect(getProfileForm(state as StateSchema)).toEqual(form)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    })
})
