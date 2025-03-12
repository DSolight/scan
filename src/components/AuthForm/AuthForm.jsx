import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/authSlice';

export default function AuthForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Проверка, заполнены ли все поля
  const isFormValid = email && password;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    setError('');

    try {
      // Вызов асинхронного действия для авторизации
      await dispatch(loginUser(email, password)).unwrap();

      // Перенаправление на главную страницу
      navigate('/');
    } catch (err) {
      setError(err.message || 'Произошла ошибка при авторизации');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Login:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Пароль:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" disabled={!isFormValid || isLoading}>
        {isLoading ? 'Загрузка...' : 'Войти'}
      </button>
    </form>
  );
}
