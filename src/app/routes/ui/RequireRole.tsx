import React, {PropsWithChildren, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {getUserRoles, TUserRole} from '../../../entities/User';
import {Navigate, useLocation} from 'react-router-dom';
import {RoutePath} from '@/shared/config/routeConfig/routeConfig';

interface RequireRoleProps {
    children: PropsWithChildren<any>;
    roles?: TUserRole[]
}

export const RequireRole = (props: RequireRoleProps) => {
    const {
        children,
        roles,
    } = props;

    const userRoles = useSelector(getUserRoles)
    const location = useLocation();

    // есть ли доступ у пользователя
    const hasRequire = useMemo(() => {
        if (!roles) {
            return true
        }
        return roles.some((requireRole) => {
            const hasRole = userRoles?.includes(requireRole)
            return Boolean(hasRole);
        })
    }, [userRoles, roles])

    // если у пользователья нет доступа
    if (!hasRequire) return (<Navigate to={RoutePath.unavailable} state={{from: location}} replace/>)

    return children
}