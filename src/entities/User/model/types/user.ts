export const UserRole = {
    'ADMIN': 'ADMIN',
    'USER': 'USER',
    'MANAGER': 'MANAGER',
} as const;

export type TUserRole = (typeof UserRole)[keyof typeof UserRole];

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