import { IProfile } from '@/entities/Profile';

export interface ProfileSchema {
    data?: IProfile;
    form?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: TValidateProfileError[];

}

export const ValidateProfileError = {
    INCORRECT_USER_DATA: 'INCORRECT_USER_DATA',
    INCORRECT_AGE: 'INCORRECT_AGE',
    INCORRECT_COUNTRY: 'INCORRECT_COUNTRY',
    DATA_NOT_FOUND: 'DATA_NOT_FOUND',
    SERVER_NOT_RESPONSE: 'SERVER_NOT_RESPONSE',
} as const;

export type TValidateProfileError = (typeof ValidateProfileError)[keyof typeof ValidateProfileError];