import {TestAsyncThunk} from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import {fetchProfileData} from './fetchProfileData';
import {Currency} from '@/entities/Currency';

const data = {
    age: 22,
    country: 'Armenia',
    username: 'admin',
    first: 'John',
    lastname: 'Doe',
    currency: Currency.USD,
    city: 'Москва',
    id: '1',
}
describe('fetchProfileData.test', () => {
    test('success get data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({data: data}));

        const result = await thunk.callThunk(data.id)

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error get data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk(data.id)

        expect(result.meta.requestStatus).toBe('rejected');
    });
})