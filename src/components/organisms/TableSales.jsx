import React from 'react';
import { useSelector } from 'react-redux';

export const TableSales = () => {
    const { saleDay } = useSelector((state) => state.sales) || [];

    const unidades =
        saleDay.length > 0 &&
        saleDay
            .map((product) => parseInt(product?.quantity))
            .reduce((current, next) => current + next);
    const total =
        saleDay.length > 0 &&
        saleDay
            .map((product) => product?.total)
            .reduce((current, next) => current + next);

    return saleDay.length > 0 ? (
        <table className="table">
            <caption>Lista de ventas diarias</caption>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio unitario</th>
                    <th scope="col">Unidades vendidas</th>
                    <th scope="col">Precio total</th>
                    <th scope="col">Fecha</th>
                </tr>
            </thead>
            <tbody>
                {saleDay.length > 0 &&
                    saleDay.map((product, key) => (
                        <tr key={key}>
                            <th scope="row">{key + 1}</th>
                            <td>{product.product}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.total}</td>
                            <td>{product.date}</td>
                        </tr>
                    ))}

                <tr>
                    <th scope="row">*</th>
                    <td colSpan={2}>
                        <b>Total</b>
                    </td>
                    <td>{unidades} </td>
                    <td colSpan={2}>{total}</td>
                </tr>
            </tbody>
        </table>
    ) : (
        <article className="d-flex align-items-center justify-content-center min-vh-100 ">
            <h1 className="align-self-center">No se encontaron datos</h1>
        </article>
    );
};
