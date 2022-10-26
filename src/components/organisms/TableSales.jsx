import React from 'react';

export const TableSales = () => {
    const products = JSON.parse(localStorage.getItem('sales')) || [];

    const unidades = products.length > 0 && products
        .map((product) => parseInt(product?.quantity))
        .reduce((current, next) => current + next);
    const total =
        products.length > 0 &&
        products
            .map((product) => product?.total)
            .reduce((current, next) => current + next);

    return (
        <table className="table table-striped">
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
                {products.length > 0 && products.map((product, key) => (
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
    );
};
