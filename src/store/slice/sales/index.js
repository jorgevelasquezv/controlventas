import { createSlice } from '@reduxjs/toolkit';

export const salesSlices = createSlice({
    name: 'sales',
    initialState: {
        sale: {product: '', price: 0, quantity: 0, total: 0, date: ''},
    },
    reducers: {
        setSale: (state, action) => {
            state.sale = action.payload;
        },
    },
});

export const { setSale } =
    salesSlices.actions;

export default salesSlices.reducer;
