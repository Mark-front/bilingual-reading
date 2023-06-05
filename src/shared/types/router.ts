import { RouteProps } from 'react-router-dom';
import { TUserRole } from '@/entities/User';
import { AppRoutes } from '@/shared/const/router';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean,
    roles?: TUserRole[]
}
export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes]