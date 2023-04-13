import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Currency } from '@/entities/Currency';

describe('getProfileData.test', () => {
    test('should return isLoading', () => {
        const data = {
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
                data,
            },
        } as StateSchema

        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    })
})
