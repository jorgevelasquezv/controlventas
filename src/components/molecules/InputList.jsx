import React from 'react';
import { listProdusts } from '../../helpers/listProducts';

export const InputList = ({ handleOnChangeProduct, sale }) => {
    return (
        <section className="m-1 mb-2">
            <label htmlFor="productList" className="form-label">
                Lista de Productos
            </label>
            <input
                className="form-control"
                list="datalistOptions"
                id="productList"
                name="product"
                placeholder="Escribe para buscar..."
                onChange={handleOnChangeProduct}
                value={sale}
                required
            />
            <datalist id="datalistOptions">
                {listProdusts.map((product, key) => (
                    <option value={product} key={key} />
                ))}
            </datalist>
            <article className="invalid-feedback">
                Por favor, elije un producto.
            </article>
        </section>
    );
};
