import React from 'react';

export default function AuthForm() {
  return (
    <form>
      <div>
        <label>Email:</label>
        <input type="email" />
      </div>
      <div>
        <label>Пароль:</label>
        <input type="password" />
      </div>
      <button type="submit">Войти</button>
    </form>
  );
}
