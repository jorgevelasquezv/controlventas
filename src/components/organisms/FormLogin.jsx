import { ButtonLogin } from '../atoms/ButtonLogin';
import { InputFieldLogin } from '../molecules/InputFieldLogin';
import { useDispatch, useSelector } from 'react-redux';
import { setPassword, setUsername } from '../../store/slice/users';

export const FormLogin = ({ dataForm }) => {
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

    return (
        <form className="p-3 mt-3">
            <InputFieldLogin
                data={dataInputUsername}
                handleOnchange={handleOnchangeUsername}
            />
            <InputFieldLogin
                data={dataInputPassword}
                handleOnchange={handleOnchangePassword}
            />
            <ButtonLogin data={buttonLogin} />
        </form>
    );
};
