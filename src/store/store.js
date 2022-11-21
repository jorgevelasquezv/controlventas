import { configureStore } from "@reduxjs/toolkit";
import users from './slice/users/index'
import sales from './slice/sales/index'

export default configureStore({
    reducer: {users, sales}
})