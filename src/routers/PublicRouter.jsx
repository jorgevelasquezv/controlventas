import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRouter = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.users);
    return !isAuthenticated ? children : <Navigate to="/home" />;
};
