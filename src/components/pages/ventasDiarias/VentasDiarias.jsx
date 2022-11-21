import { useDispatch, useSelector } from 'react-redux';
import { setSaleDay } from '../../../store/slice/sales';
import { Layout } from '../../layout/Layout';
import { InputGroupFormSale } from '../../molecules/InputGroupFormSale';
import { TableSales } from '../../organisms/TableSales';

export const VentasDiarias = () => {

    const day = new Date().toISOString().replace(/.$/, '');

    const { sales } = useSelector((state) => state.sales);

    const dispatch = useDispatch()

    const handleOnChangeDate = (e) => {
        const dateCompared = new Date(e.target.value).toLocaleDateString();
        dispatch(
            setSaleDay(sales.filter((sale) => sale.date.includes(dateCompared)))
        );
    };

    return (
        <Layout>
            <section className="container min-vh-100">
                <form className="m-5">
                    <InputGroupFormSale
                        spanLeft="Fecha Venta"
                        alert="Por favor, ingrese cantidad de productos."
                        handleOnChange={handleOnChangeDate}
                        type="datetime-local"
                        defaultValue={day}
                    />
                </form>
                <TableSales />
            </section>
        </Layout>
    );
};
