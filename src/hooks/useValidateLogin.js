import { useDispatch, useSelector } from 'react-redux';
import {
    setIsAutenticated,
    setPassword,
    setUsername,
} from '../store/slice/users';

const regexUsername = /^[A-Za-z]{4,20}\d{0,2}$/g;
const regexPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/g;

export const useValidateLogin = () => {
    const dispatch = useDispatch();
    const { username, password } = useSelector((state) => state.users);
    const handleLogin = (e) => {
        e.preventDefault();
        if (regexUsername.test(username) && regexPassword.test(password)) {
            dispatch(setIsAutenticated(true));
            dispatch(setPassword(''));
            dispatch(setUsername(''));
        }
    };
    return [handleLogin];
};
