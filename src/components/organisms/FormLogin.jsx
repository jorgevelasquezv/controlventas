import React from 'react';
import { ButtonLogin } from '../atoms/ButtonLogin';
import { InputFieldLogin } from '../molecules/InputFieldLogin';

export const FormLogin = () => {
    return (
        <form className="p-3 mt-3">
            <InputFieldLogin />
            <InputFieldLogin />
            <ButtonLogin />
        </form>
    );
};
