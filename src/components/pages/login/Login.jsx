import React from 'react';
import { dataFormLogin } from '../../../helpers/dataFormLogin';
import { TitleLogin } from '../../atoms/TitleLogin';
import { LogoLogin } from '../../molecules/LogoLogin';
import { FormLogin } from '../../organisms/FormLogin';

import './Login.css';

export const Login = () => {
    
    return (
        <section className="wrapper">
            <LogoLogin />
            <TitleLogin title="Mi Venta" />
            <FormLogin dataForm={dataFormLogin} />
        </section>
    );
};
