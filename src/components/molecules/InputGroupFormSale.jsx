import React from 'react';

export const InputGroupFormSale = ({
    spanLeft,
    spanRight,
    alert,
    sale,
    handleOnChange,
    disabled = false,
    type = 'number',
    defaultValue
}) => {
    return (
        <section className="input-group m-1 mb-2">
            <span className="input-group-text">{spanLeft}</span>
            <input
                id="price"
                name="price"
                type={type}
                className="form-control"
                value={sale}
                onChange={handleOnChange}
                required
                disabled={disabled}
                defaultValue={defaultValue}
            />
            <span className="input-group-text">{spanRight}</span>
            <article className="invalid-feedback">
                {alert}
            </article>
        </section>
    );
};
