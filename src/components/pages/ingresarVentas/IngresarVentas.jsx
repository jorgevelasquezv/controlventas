import { Layout } from '../../layout/Layout';
import { FormIngresarVentas } from '../../organisms/FormIngresarVentas';

export const Ventas = () => {
    return (
        <Layout position="position-absolute bottom-0 end-0 start-0">
            <FormIngresarVentas />
        </Layout>
    );
};
