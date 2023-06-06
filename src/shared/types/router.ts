import { RouteProps } from 'react-router-dom';
import { AppRoutes } from '@/shared/const/router';
import type { TUserRole } from '../types/user';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean,
    roles?: TUserRole[]
}
export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes]