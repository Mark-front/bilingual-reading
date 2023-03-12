import {TCountry} from '@/entities/Country';
import {TCurrency} from '@/entities/Currency';

export interface IProfile {
    'first'?: string;
    'lastname'?: string;
    'age'?: number;
    'currency'?: TCurrency;
    'country'?: TCountry;
    'city'?: string;
    'username'?: string;
    'avatar'?: string;
}

export interface ProfileSchema {
    data?: IProfile;
    form?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly?: boolean;
}