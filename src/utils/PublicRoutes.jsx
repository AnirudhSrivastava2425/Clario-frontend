import React from 'react'
import { Navigate } from 'react-router-dom';
import useUserStore from '../store/user.store';
const PublicRoute = ({
    children
}) => {

    const { isLogged } = useUserStore();

    if (isLogged) {
        return <Navigate to="/" />;
    }

  return children;
}

export default PublicRoute