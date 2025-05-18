import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../utils/authSlice';

export default function HeaderLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLoginClick = () => {
    navigate('/auth');
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={handleLogoutClick}>Выйти</button>
      ) : (
        <>
          <button>Зарегистрироваться</button>
          <button onClick={handleLoginClick}>Войти</button>
        </>
      )}
    </div>
  );
}
