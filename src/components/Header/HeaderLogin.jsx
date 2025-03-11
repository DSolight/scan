import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeaderLogin() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/auth'); // Переход на страницу авторизации
  };

  return (
    <div>
      <button>Зарегистрироваться</button>
      <button onClick={handleLoginClick}>Войти</button>
    </div>
  );
}
