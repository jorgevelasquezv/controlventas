import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Ventas } from '../components/pages/ingresarVentas/IngresarVentas';
import { VentasDiarias } from '../components/pages/ventasDiarias/VentasDiarias';
import { VentasMensuales } from '../components/pages/ventasMensuales/VentasMensuales';

export const AppRouter = () => {
    return (
        <Routes>
            <Route end path="/home" element={<Ventas />} />
            <Route end path="/diarias" element={<VentasDiarias />} />
            <Route end path="/mensuales" element={<VentasMensuales />} />
        </Routes>
    );
};
