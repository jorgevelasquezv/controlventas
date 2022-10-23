import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setIsAutenticated,
    setPassword,
    setUsername,
} from '../../store/slice/users';

const regexUsername = /[A-Za-z0-9]{8,20}/g;
const regexPassword = /[A-Za-z0-9]{8,20}/g;

export const ButtonLogin = ({ data }) => {
    const { name } = data;
    const dispatch = useDispatch();
    const { isAuthenticated, username, password } = useSelector(
        (state) => state.users
    );
    const handleLogin = (e) => {
        e.preventDefault();
        if (regexUsername.test(username) && regexPassword.test(password)) {
            dispatch(setIsAutenticated(true));
            console.log(true);
            console.log(isAuthenticated);
            dispatch(setPassword(''));
          dispatch(setUsername(''));
          
          console.log(JSON.parse(localStorage.getItem('log')));
        }
    };

    return (
        <button className="btn mt-3" onClick={handleLogin}>
            {name}
        </button>
    );
};