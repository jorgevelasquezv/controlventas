import React from 'react';
import { useIngresarVentas } from '../../hooks/useIngresarVentas';
import { ButtonSaveVenta } from '../molecules/ButtonSaveVenta';
import { InputGroupFormSale } from '../molecules/InputGroupFormSale';
import { InputList } from '../molecules/InputList';

export const FormIngresarVentas = () => {
    const [
        validate,
        sale,
        handleOnChangeProduct,
        handleOnChangePrice,
        handleOnChangeQuantity,
        handleOnChangeDate,
        handleOnClickSaveSale,
    ] = useIngresarVentas();

    return (
        <form
            className={`container needs-validation ${
                validate === 1 && 'was-validated'
            }`}
            noValidate
        >
            <InputList
                handleOnChangeProduct={handleOnChangeProduct}
                sale={sale.product}
            />

            <InputGroupFormSale
                spanLeft="Precio unitario"
                spanRight="$"
                alert="Por favor, ingrese el precio."
                sale={sale.price}
                handleOnChange={handleOnChangePrice}
            />

            <InputGroupFormSale
                spanLeft="Cantidad"
                spanRight="Und"
                alert="Por favor, ingrese cantidad de productos."
                sale={sale.quantity}
                handleOnChange={handleOnChangeQuantity}
            />

            <InputGroupFormSale
                spanLeft="Fecha Venta"
                alert="Por favor, ingrese cantidad de productos."
                handleOnChange={handleOnChangeDate}
                type="datetime-local"
                defaultValue={sale.date}
            />

            <InputGroupFormSale
                spanLeft="Precio total"
                spanRight="$"
                sale={sale.total}
                disabled={true}
            />

            <ButtonSaveVenta handleOnClickSaveSale={handleOnClickSaveSale} />
        </form>
    );
};
