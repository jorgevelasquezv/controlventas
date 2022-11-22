import { useSelector } from 'react-redux';
import { useState } from 'react';
import { months } from '../helpers/months';

export const useVentasMensuales = () => {
    const { sales } = useSelector((state) => state.sales);
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const labels = (month) => [
        ...new Set(
            sales
                .filter((sale) => sale.date.includes('/' + month + '/'))
                .map((sale) => sale.product)
        ),
    ];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `Ventas del mes ${months[month - 1]}`,
            },
        },
    };

    const filtro = (sales, month) => {
        const salesByMonth = sales.filter((sale) =>
            sale.date.includes('/' + month + '/')
        );
        const productsByMonth = [
            ...new Set(salesByMonth.map((sale) => sale.product)),
        ];
        const products = [];

        salesByMonth.forEach((sale) =>
            productsByMonth.forEach((product) => {
                if (sale.product === product) {
                    const productFind = products.find(
                        (product) => sale.product === Object.keys(product)[0]
                    );
                    if (productFind) {
                        const quantityProductFind = parseInt(
                            productFind[product]
                        );
                        productFind[product] =
                            parseInt(sale.quantity) + quantityProductFind;
                    } else {
                        products.push({
                            [product]: parseInt(sale.quantity),
                        });
                    }
                }
            })
        );
        
        const dataProducts = products.map(
            (product) => Object.values(product)[0]
        );

        return dataProducts;
    };

    const data = {
        labels: labels(month),
        datasets: [
            {
                label: months[month-1],
                data: filtro(sales, month),
                backgroundColor: 'rgba(59, 122, 206, 0.6)',
            },
        ],
    };

    const handleOnChange = (e) => {
        setMonth(parseInt(e.target.value) + 1);
    };

    return [months, options, data, handleOnChange];
};
