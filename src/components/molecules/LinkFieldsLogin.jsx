import React from 'react';
import { LinkLogin } from '../atoms/LinkLogin';

export const LinkFieldsLogin = ({link, title}) => {
    return (
        <article className="text-center fs-6">
            <LinkLogin link={link} title={title} />
        </article>
    );
};
