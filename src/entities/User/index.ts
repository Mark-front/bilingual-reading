export { userReducer, userActions } from './model/slice/userSlise';
export type { IUser, IUserSchema } from './model/types/user';
export { getUserAuthData } from './model/selectors/getAuthData/getAuthData';
export { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';
export { isUserManager, isUserAdmin, getUserRoles } from './model/selectors/getUserRole/getUserRole';
