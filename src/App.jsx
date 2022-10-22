import { Provider } from "react-redux";
import { Login } from "./components/pages/login/Login";
import  store  from "./store/store";

import React from 'react'

export const App = () => {
  return (
      <Provider store={store}>
          <Login />
      </Provider>
  );
}

