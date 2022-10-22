import { configureStore } from "@reduxjs/toolkit";
import users from './slice/users/index'

export default configureStore({
    reducer: {users}
})