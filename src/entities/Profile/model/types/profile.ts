import {TCountry, TCurrency} from '@/shared/const/common';

export interface IProfile {
    'first': string;
    'lastname': string;
    'age': number;
    'currency': TCurrency;
    'country': TCountry;
    'city': string;
    'username': string;
    'avatar': string;
}

export interface ProfileSchema {
    data?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}