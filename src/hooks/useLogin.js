import { useDispatch, useSelector } from 'react-redux';
import { setPassword, setUsername } from '../store/slice/users';

export const useLogin = (dataForm) => {
    const { username, password } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const { inputUsername, inputPassword, buttonLogin } = dataForm;

    const dataInputUsername = { ...inputUsername, username };
    const dataInputPassword = { ...inputPassword, password };

    const handleOnchangeUsername = (event) => {
        dispatch(setUsername(event.target.value));
    };
    const handleOnchangePassword = (event) => {
        dispatch(setPassword(event.target.value));
    };

    return [
        dataInputUsername,
        dataInputPassword,
        handleOnchangeUsername,
        handleOnchangePassword,
        buttonLogin,
    ];
};
