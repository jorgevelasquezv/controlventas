import React from 'react';
import { InputLogin } from '../atoms/InputLogin';
import { SpanInputLogin } from '../atoms/SpanInputLogin';

export const InputFieldLogin = ({ data }) => {
    const {typeSpan, type, name, id, placeholder} = data;
    return (
        <article className="form-field d-flex align-items-center">
            <SpanInputLogin type={typeSpan} />
            <InputLogin type={type} name={name} id={id} placeholder={placeholder} />
        </article>
    );
};
