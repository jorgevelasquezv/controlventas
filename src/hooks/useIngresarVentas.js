import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../helpers/formDate";
import { setSale, setSales, setValidate } from "../store/slice/sales";

export const useIngresarVentas = () => {
    const { sale, sales, validate } = useSelector((state) => state.sales);
    const saleInput = { ...sale };
    const dispatch = useDispatch();

    const handleOnChangeProduct = (e) => {
        saleInput.product = e.target.value;
        dispatch(setSale(saleInput));
    };
    const handleOnChangePrice = (e) => {
        saleInput.price = e.target.value;
        saleInput.total = saleInput.price * saleInput.quantity;
        dispatch(setSale(saleInput));
    };
    const handleOnChangeQuatity = (e) => {
        saleInput.quantity = e.target.value;
        saleInput.total = saleInput.price * saleInput.quantity;
        dispatch(setSale(saleInput));
    };
    const handleOnChangeDate = (e) => {
        saleInput.date = e.target.value;
        console.log(saleInput.date);
    };

    const handleOnClickSaveSale = (e) => {
        e.preventDefault();

        if (
            saleInput.product.trim().length > 0 &&
            saleInput.price.length > 0 &&
            sale.quantity.length > 0
        ) {
            dispatch(setValidate(2));
            saleInput.date = new Date(saleInput.date).toLocaleString();

            dispatch(setSales([...sales, saleInput]));
            dispatch(
                setSale({
                    product: '',
                    price: '',
                    quantity: '',
                    total: '',
                    date: new Date().toISOString().replace(/.$/, ''),
                })
            );
        } else {
            dispatch(setValidate(1));
        }
    };

    useEffect(() => {
        localStorage.setItem('sales', JSON.stringify(sales));
    }, [sales]);

    return [validate, sale, handleOnChangeProduct, handleOnChangePrice, handleOnChangeQuatity, handleOnChangeDate, handleOnClickSaveSale]
}