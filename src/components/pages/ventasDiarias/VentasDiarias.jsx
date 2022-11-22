import { useVentasDiarias } from '../../../hooks/useVentasDiarias';
import { Layout } from '../../layout/Layout';
import { InputGroupFormSale } from '../../molecules/InputGroupFormSale';
import { TableSales } from '../../organisms/TableSales';

export const VentasDiarias = () => {
    const [handleOnChangeDate, day] = useVentasDiarias();

    return (
        <Layout position="position-absolute bottom-0 end-0 start-0">
            <section className="container">
                <form className="m-5">
                    <InputGroupFormSale
                        spanLeft="Fecha Venta"
                        alert="Por favor, ingrese cantidad de productos."
                        handleOnChange={handleOnChangeDate}
                        type="datetime-local"
                        defaultValue={day()}
                    />
                </form>
                <TableSales />
            </section>
        </Layout>
    );
};
