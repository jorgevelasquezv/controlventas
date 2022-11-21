import React from 'react';
import { useValidateLogin } from '../../hooks/useValidateLogin';


export const ButtonLogin = ({ data }) => {
    const { name } = data;

    const [handleLogin] = useValidateLogin();

    return (
        <button className="btn mt-3" onClick={handleLogin}>
            {name}
        </button>
    );
};
