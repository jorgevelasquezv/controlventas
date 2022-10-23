import React from 'react';
import { Layout } from '../../layout/Layout';
import { TableSales } from '../../organisms/TableSales';

export const VentasDiarias = () => {
    return (
        <Layout>
            <section className="container fluid">
                <TableSales />
            </section>
        </Layout>
    );
};
