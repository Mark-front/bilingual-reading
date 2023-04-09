import {Counter} from './ui/Counter';
import type {CounterSchema} from './model/types/counterShema';
import {counterReducer} from './model/slice/counterSlice';

export {
    Counter,
    CounterSchema,
    counterReducer,
}