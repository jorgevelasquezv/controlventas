import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSale } from '../../../store/slice/sales';
import { Layout } from '../../layout/Layout';

export const Ventas = () => {

    const padTo2Digits = (num) => {
        return num.toString().padStart(2, '0');
    }

    const formatDate = (date) => {
        return (
            [
                date.getFullYear(),
                padTo2Digits(date.getMonth() + 1),
                padTo2Digits(date.getDate()),
            ].join('-') +
            ' ' +
            [
                padTo2Digits(date.getHours()),
                padTo2Digits(date.getMinutes()),
                padTo2Digits(date.getSeconds()),
            ].join(':')
        );
    }

    const { sale } = useSelector((state) => state.sales);
    const saleInput = {...sale};
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

    const handleSaveSale = (e) => {
        e.preventDefault();

        saleInput.date = formatDate(new Date());

        dispatch(setSale(saleInput));

        console.log('Product : ', saleInput.product);
        console.log('Price : ', saleInput.price);
        console.log('Quantity : ', saleInput.quantity);
        console.log(sale);
    };

    return (
        <Layout>
            <form className="container">
                <div className="m-1">
                    <label htmlFor="productList" className="form-label">
                        Lista de Productos
                    </label>
                    <input
                        className="form-control"
                        list="datalistOptions"
                        id="productList"
                        name="product"
                        placeholder="Escribe para buscar..."
                        onChange={handleOnChangeProduct}
                    />
                    <datalist id="datalistOptions">
                        <option value="San Francisco"></option>
                        <option value="New York"></option>
                        <option value="Seattle"></option>
                        <option value="Los Angeles"></option>
                        <option value="Chicago"></option>
                    </datalist>
                </div>
                <div className="input-group m-1">
                    <span className="input-group-text">Precio unitario</span>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        className="form-control"
                        aria-label="Dollar amount (with dot and two decimal places)"
                        value={sale.price}
                        onChange={handleOnChangePrice}
                    />
                    <span className="input-group-text">$</span>
                </div>
                <div className="input-group m-1">
                    <span className="input-group-text">Cantidad</span>
                    <input
                        id="quantity"
                        name="quantity"
                        type="number"
                        className="form-control"
                        aria-label="Dollar amount (with dot and two decimal places)"
                        value={sale.quantity}
                        onChange={handleOnChangeQuatity}
                    />
                    <span className="input-group-text">Und</span>
                </div>
                <div className="input-group m-1">
                    <span className="input-group-text">Precio total</span>
                    <input
                        id="total"
                        name="total"
                        type="number"
                        className="form-control"
                        aria-label="Dollar amount (with dot and two decimal places)"
                        value={sale.total}
                        disabled
                    />
                    <span className="input-group-text">$</span>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSaveSale}
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </Layout>
    );
};
