import React from 'react';

export const TableSales = () => {
    return (
        <table className="table table-striped">
            <caption>Lista de ventas diarias</caption>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Primero</th>
                    <th scope="col">Último</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    );
};
