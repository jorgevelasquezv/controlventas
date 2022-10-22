import React, { useState } from 'react';
import { ButtonLogin } from '../atoms/ButtonLogin';
import { InputFieldLogin } from '../molecules/InputFieldLogin';

export const FormLogin = ({ dataForm }) => {
    
    const { inputFieldLoginOne, inputFieldLoginTwo, buttonLogin } = dataForm;
    const [login, setLogin] = useState(false)
    const handleLogin = () => {
        return 
    }

    return (
        <form className="p-3 mt-3">
            <InputFieldLogin data={inputFieldLoginOne} />
            <InputFieldLogin data={inputFieldLoginTwo} />
            <ButtonLogin data={buttonLogin} onClick={handleLogin} />
        </form>
    );
};
