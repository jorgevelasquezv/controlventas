import React from 'react';
import { TitleLogin } from '../../atoms/TitleLogin';
import { LogoLogin } from '../../molecules/LogoLogin';
import { FormLogin } from '../../organisms/FormLogin';

import './Login.css';

export const Login = () => {
    const dataForm = {
        inputUsername: {
            typeSpan: 'far fa-user',
            type: 'text',
            name: 'userName',
            id: 'userName',
            placeholder: 'userName',
        },
        inputPassword: {
            typeSpan: 'fas fa-key',
            type: 'password',
            name: 'password',
            id: 'pwd',
            placeholder: 'Password',
        },
        buttonLogin: { name: 'Login' },
    };
    return (
        <section className="wrapper">
            <LogoLogin />
            <TitleLogin title="Control Ventas" />
            <FormLogin dataForm={dataForm} />
            {/* <form className="p-3 mt-3">
                <article className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="Username"
                    />
                </article>
                <article className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input
                        type="password"
                        name="password"
                        id="pwd"
                        placeholder="Password"
                    />
                </article>
                <button className="btn mt-3">Login</button>
            </form> */}
            <article className="text-center fs-6">
                <a href="#">Forget password?</a> or <a href="#">Sign up</a>
            </article>
        </section>
    );
};
