import { Layout } from '../../layout/Layout';
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
import { useVentasMensuales } from '../../../hooks/useVentasMensuales';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const VentasMensuales = () => {
    const [months, options, data, handleOnChange] = useVentasMensuales();

    return (
        <Layout>
            <section className="container-sm">
                <label htmlFor="lang">
                    <b>Seleccione un mes</b>
                </label>
                <select
                    name="Meses"
                    className="form-select"
                    id="lang"
                    onChange={handleOnChange}
                    defaultValue={new Date().getMonth()}
                >
                    {months.map((month, key) => (
                        <option value={months.indexOf(month)} key={key}>
                            {month}
                        </option>
                    ))}
                </select>
            </section>
            <section className="container-fluid row justify-content-center align-content-center">
                <Bar
                    options={options}
                    data={data}
                    className="w-75 h-75 text-center"
                />
            </section>
        </Layout>
    );
};
