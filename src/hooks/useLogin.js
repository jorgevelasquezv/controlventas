import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPassword, setUsername } from '../store/slice/users';

export const useLogin = (dataForm) => {
    const [validName, setValidName] = useState('red');
    const [validPassword, setValidPassword] = useState('red');
    const { username, password } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const { inputUsername, inputPassword, buttonLogin } = dataForm;

    const dataInputUsername = { ...inputUsername, username };
    const dataInputPassword = { ...inputPassword, password };

    const handleOnchangeUsername = (event) => {
        //El nombre debe contener minimo 4 letras mayusculas o minusculas opcionamente puede finalizar con maximo 2 
        if (/^[A-Za-z]{4,20}\d{0,2}$/g.test(event.target.value)) {
            dispatch(setUsername(event.target.value));
            setValidName('green');
        } else {
            setValidName('red');
        }
    };
    const handleOnchangePassword = (event) => {
        // La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula,
        // al menos una mayúscula y al menos un caracter no alfanumérico.
        if (
            /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/g.test(
                event.target.value
            )
        ) {
            dispatch(setPassword(event.target.value));
            setValidPassword('green');
        } else {
            setValidPassword('red');
        }
    };

    return [
        dataInputUsername,
        dataInputPassword,
        handleOnchangeUsername,
        handleOnchangePassword,
        buttonLogin,
        validName,
        validPassword,
    ];
};
