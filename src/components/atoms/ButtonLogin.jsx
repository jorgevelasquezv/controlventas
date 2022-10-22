import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAutenticated } from '../../store/slice/users';

export const ButtonLogin = ({ data }) => {
  const { name } = data;
  const dispatch = useDispatch()
  const { isAuthenticated, username, password } = useSelector((state) => state.users)
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      dispatch(setIsAutenticated(true));
      console.log(true);
      console.log(isAuthenticated);
    } 
  }
  
  return <button className="btn mt-3" onClick={handleLogin}>{name}</button>;
}
