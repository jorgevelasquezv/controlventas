import React, { useState } from 'react'

export const InputLogin = ({ type, name, id, placeholder }) => {
  const [value, setValue] = useState('')
  
  const handleOnchange = (e) => {
    setValue(e.target.value)
  }
  return (
      <input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={handleOnchange} />
  );
}
