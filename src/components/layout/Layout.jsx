import React from 'react';
import { Footer } from '../organisms/Footer';
import { NavBar } from '../organisms/navBar/NavBar';

export const Layout = ({ children, position }) => {
    return (
        <>
            <NavBar />
            <main className="mt-4">{children}</main>
            <Footer position={position} />
        </>
    );
};
