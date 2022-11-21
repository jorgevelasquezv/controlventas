import { createSlice } from '@reduxjs/toolkit';

export const salesSlices = createSlice({
    name: 'sales',
    initialState: {
        sale: {
            product: '',
            price: '',
            quantity: '',
            total: '',
            date: new Date().toISOString().replace(/.$/, ''),
        },
        saleDay: [],
        sales: JSON.parse(localStorage.getItem('sales')) || [],
        validate: 0,
    },
    reducers: {
        setSale: (state, action) => {
            state.sale = action.payload;
        },
        setSaleDay: (state, action) => {
            state.saleDay = action.payload;
        },
        setSales: (state, action) => {
            state.sales = action.payload;
        },
        setValidate: (state, action) => {
            state.validate = action.payload;
        },
    },
});

export const { setSale, setSaleDay, setSales, setValidate } =
    salesSlices.actions;

export default salesSlices.reducer;
