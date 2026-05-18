import React from 'react'
import { Navigate } from 'react-router-dom';
import useUserStore from '../store/user.store';
const ProtectedRoute = ({
    children
}) => {

    const { isLogged } = useUserStore();

    if (!isLogged) {
        return <Navigate to="/login" />;
    }

  return children;
}

export default ProtectedRoute