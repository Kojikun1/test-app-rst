import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../contexts/authContext';

export default function Routes(){
    const { signed } = useAuth();

    console.log(signed);

    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}