import React from 'react'

export const InputLogin = ({type, name, id, placeholder}) => {
  return (
      <input type={type} name={name} id={id} placeholder={placeholder} />
  );
}
