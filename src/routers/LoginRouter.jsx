import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from '../components/pages/login/Login';
import { AppRouter } from './AppRouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const LoginRouter = () => {
    
    const { isAuthenticated } = useSelector((state) => state.users);

    useEffect(() => {
        localStorage.setItem('log', JSON.stringify(isAuthenticated))
    }, [isAuthenticated]);

    return (
        <Router>
            <Routes>
                <Route
                    end
                    path="/"
                    element={
                        <PublicRouter>
                            <Login />
                        </PublicRouter>
                    }
                />
                <Route
                    end
                    path="*"
                    element={
                        <PrivateRouter>
                            <AppRouter />
                        </PrivateRouter>
                    }
                />
            </Routes>
        </Router>
    );
};
