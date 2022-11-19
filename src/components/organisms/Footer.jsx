import React from 'react';

import gitHub from '../../assets/images/github.png';

export const Footer = () => {
    return (
        <footer className="text-center mt-3">
            <nav
                className="navbar navbar-dark"
                style={{ backgroundColor: '#808B96' }}
            >
                <div className="container-fluid  d-flex justify-content-center">
                    <p className="text-white text-center col-12">
                        Politécnico Grancolombiano Modúlo PSP Grupo 20 &copy; {new Date().getFullYear()}
                    </p>
                    <p className="text-white text-center col-12">
                        Aplicacion web Control de Ventas para modulo Proceso de
                        Software Personal Politecnico Gran Colombiano
                    </p>
                    <a
                        href="https://github.com/jorgevelasquezv/controlventas"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <img
                            src={gitHub}
                            alt="Github"
                            style={{ maxWidth: '30px' }}
                        />{' '}
                    </a>
                </div>
            </nav>
        </footer>
    );
};
