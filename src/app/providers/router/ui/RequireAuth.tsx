import React, { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { getRouteMain } from '@/shared/const/router';

export const RequireAuth = (props: PropsWithChildren<any>) => {
    const {
        children,
    } = props;

    const auth = useSelector(getUserAuthData)
    const location = useLocation();
    if (!auth) {
        return (<Navigate to={getRouteMain()} state={{ from: location }} replace/>)
    }
    return children
}