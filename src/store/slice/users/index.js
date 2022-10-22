import { createSlice } from '@reduxjs/toolkit';

export const userSlices = createSlice({
    name: 'users',
    initialState: { isAuthenticated: false, username: '', password: '' },
    reducers: {
        setIsAutenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    },
});

export const { setIsAutenticated, setUsername, setPassword } =
    userSlices.actions;

export default userSlices.reducer;
