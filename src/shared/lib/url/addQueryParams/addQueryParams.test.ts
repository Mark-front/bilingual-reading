import { getQueryParams } from '../addQueryParams/addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('test with one params', () => {
        const params = getQueryParams({
            params: 'params',
        })

        expect(params).toEqual('?params=params')
    });
    test('test with multiple params', () => {
        const params = getQueryParams({
            params1: 'params1',
            params2: 'params2',
            params3: 'params3',
        })

        expect(params).toEqual('?params1=params1&params2=params2&params3=params3')
    });
    test('test with undefined', () => {
        const params = getQueryParams({
            params1: undefined,
            params3: 'params3',
        })

        expect(params).toEqual('?params3=params3')
    });
})