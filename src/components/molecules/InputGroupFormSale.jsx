import React from 'react';

export const InputGroupFormSale = ({
    spanLeft,
    spanRight,
    alert,
    sale,
    handleOnChange,
    disabled = false
}) => {
    return (
        <section className="input-group m-1 mb-2">
            <span className="input-group-text">{spanLeft}</span>
            <input
                id="price"
                name="price"
                type="number"
                className="form-control"
                aria-label="Dollar amount (with dot and two decimal places)"
                value={sale}
                onChange={handleOnChange}
                required
                disabled={disabled}
            />
            <span className="input-group-text">{spanRight}</span>
            <article className="invalid-feedback">
                {alert}
            </article>
        </section>
    );
};
