import { TUserRole } from '@/shared/types';

export interface IUser {
    id: string;
    username: string;
    avatar?: string;
    roles?: TUserRole[]
}

export interface IUserSchema {
    authData?: IUser;
    _mounted: boolean;

}