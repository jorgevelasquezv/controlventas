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
            <article className="text-center fs-6">
                <a href="#">Forget password?</a> or <a href="#">Sign up</a>
            </article>
        </section>
    );
};
