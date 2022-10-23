import React from 'react';
import { Layout } from '../../layout/Layout';


import './IngresarVentas.css'

export const Ventas = () => {
    return (
        <Layout>
            <form className="container">
                <div className="m-1">
                    <label htmlFor="exampleDataList" className="form-label">
                        Lista de Productos
                    </label>
                    <input
                        className="form-control"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="Escribe para buscar..."
                    />
                    <datalist id="datalistOptions">
                        <option value="San Francisco"></option>
                        <option value="New York"></option>
                        <option value="Seattle"></option>
                        <option value="Los Angeles"></option>
                        <option value="Chicago"></option>
                    </datalist>
                </div>
                <div className="input-group m-1">
                    <span className="input-group-text">Precio unitario</span>
                    <input
                        id="price"
                        type="number"
                        className="form-control"
                        aria-label="Dollar amount (with dot and two decimal places)"
                    />
                    <span className="input-group-text">$</span>
                </div>
                <div className="input-group m-1">
                    <span className="input-group-text">Cantidad</span>
                    <input
                        id="price"
                        type="number"
                        className="form-control"
                        aria-label="Dollar amount (with dot and two decimal places)"
                    />
                    <span className="input-group-text">Und</span>
                </div>
                <div className="input-group m-1">
                    <span className="input-group-text">Precio total</span>
                    <input
                        id="price"
                        type="number"
                        className="form-control"
                        aria-label="Dollar amount (with dot and two decimal places)"
                        disabled
                    />
                    <span className="input-group-text">$</span>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </div>
            </form>
        </Layout>
    );
};
