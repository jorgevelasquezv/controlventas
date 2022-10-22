import React from 'react'

export const ButtonLogin = ({ data }) => {
  const {name} = data;
  return <button className="btn mt-3">{name}</button>;
}
