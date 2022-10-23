import React from 'react';
import { Footer } from '../organisms/Footer';
import { NavBar } from '../organisms/NavBar';

export const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    );
};
