import React, { PropsWithChildren, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserRoles } from '@/entities/User';
import { TUserRole } from '@/shared/types';
import { getRouteUnavailable } from '@/shared/const/router';

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
    }, [ userRoles, roles ])

    // если у пользователья нет доступа
    if (!hasRequire) return (<Navigate to={getRouteUnavailable()} state={{ from: location }} replace/>)

    return children
}