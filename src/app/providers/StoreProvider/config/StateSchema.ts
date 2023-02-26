import {CounterSchema} from '@/entities/Counter/modal/types/counterShema';
import {IUserSchema} from '@/entities/User';

export interface StateSchema {
    counter: CounterSchema
    user: IUserSchema
}