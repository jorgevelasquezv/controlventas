import { Provider } from 'react-redux';
import store from './store/store';
import { LoginRouter } from './routers/LoginRouter';

export const App = () => {

    return (
        <Provider store={store}>
            <LoginRouter />
        </Provider>
    );
};
