import { Layout } from '../../layout/Layout';
import { TableSales } from '../../organisms/TableSales';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const VentasMensuales = () => {

    const {sales} = useSelector((state) => state.sales)

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    const labels = sales.map((sale) => sale.date);
    const products = [...new Set(sales.map((sale) => sale.product))];

    const data = {
        labels,
        datasets: [
            {
                label: products[0],
                data: sales.map((sale) => sale.quantity),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: products[1],
                data: sales.map((sale) => sale.quantity),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <Layout>
            <section className="container fluid">
                {/* <TableSales /> */}
                <Bar options={options} data={data} />
            </section>
        </Layout>
    );
};
