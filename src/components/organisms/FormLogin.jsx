import { ButtonLogin } from '../atoms/ButtonLogin';
import { InputFieldLogin } from '../molecules/InputFieldLogin';
import { useLogin } from '../../hooks/useLogin';

export const FormLogin = ({ dataForm }) => {
    const [
        dataInputUsername,
        dataInputPassword,
        handleOnchangeUsername,
        handleOnchangePassword,
        buttonLogin,
    ] = useLogin(dataForm);

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
