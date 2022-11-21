import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/grafico-de-barras.png';
import { setIsAutenticated } from '../../../store/slice/users';

import './NavBar.css'

export const NavBar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(setIsAutenticated(false));
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navwrapper">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <figure className="d-inline-block align-top m-1">
                        <img src={logo} width={30} height={30} alt="Logo" />
                    </figure>
                    Control Ventas
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                end={true}
                                className={({ isActive }) =>
                                    `nav-link ${
                                        isActive ? 'active text-black' : ''
                                    }`
                                }
                                aria-current="page"
                                to="/home"
                            >
                                Ingresar Ventas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link ${
                                        isActive ? 'active text-black' : ''
                                    }`
                                }
                                aria-current="page"
                                to="/diarias"
                            >
                                Ventas Diarias
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link ${
                                        isActive ? 'active text-black' : ''
                                    }`
                                }
                                aria-current="page"
                                to="/mensuales"
                            >
                                Ventas Mensuales
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <span className="navbar-text">
                    <NavLink
                        className={({ isActive }) =>
                            `nav-link ${isActive ? 'active text-black' : ''}`
                        }
                        aria-current="page"
                        onClick={handleLogout}
                        to="/"
                    >
                        Logout
                    </NavLink>
                </span>
            </div>
        </nav>
    );
};
