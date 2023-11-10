import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const PrivateRoutes = () => {
    const [cookie,] = useCookies(['access_token']);
    return (
        cookie?.access_token ? <Outlet /> : <Navigate to="/sign-in" />
    )
}

export default PrivateRoutes