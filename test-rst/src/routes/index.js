import React, { useContext } from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import AuthContext from '../contexts/authContext';

export default function Routes(){
    const { signed } = useContext(AuthContext);

    console.log(signed);

    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}