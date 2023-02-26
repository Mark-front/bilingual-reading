import {counterReduser, CounterSchema} from '@/entities/Counter';
import {counterActions} from './counterSlice';

describe('counterSlice.test', () => {
    test('increment', () => {
        const state: CounterSchema = {
            value: 10,
        }

        expect(counterReduser(state, counterActions.increment()))
            .toEqual({
                value: 11,
            })
    })
    test('decrement', () => {
        const state: CounterSchema = {
            value: 10,
        }

        expect(counterReduser(state, counterActions.decrement()))
            .toEqual({
                value: 9,
            })
    })
    test('should work with empty state', () => {
        expect(counterReduser(undefined, counterActions.increment()))
            .toEqual({
                value: 1,
            })
    })
})