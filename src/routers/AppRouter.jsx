import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Ventas } from '../components/pages/ventas/Ventas';

export const AppRouter = () => {
    return (
        <Routes>
            <Route end path="/home" element={<Ventas />} />
        </Routes>
    );
};
