import React from 'react';
import { InputLogin } from '../atoms/InputLogin';
import { SpanInputLogin } from '../atoms/SpanInputLogin';

export const InputFieldLogin = ({ data, handleOnchange, valid }) => {
    const { typeSpan } = data;
    return (
        <article className="form-field d-flex align-items-center">
            <SpanInputLogin type={typeSpan} />
            <InputLogin data={data} handleOnchange={handleOnchange} valid={valid}/>
        </article>
    );
};
