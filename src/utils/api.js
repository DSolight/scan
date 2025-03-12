const BASE_URL = 'https://gateway.scan-interfax.ru/api/v1';

// Функция для выполнения запросов с авторизацией
export const fetchWithAuth = async (url, options = {}) => {
  const token = localStorage.getItem('accessToken');
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  return fetch(`${BASE_URL}${url}`, { ...options, headers });
};

// Функция для авторизации
export const login = async (email, password) => {
  const response = await fetch(`${BASE_URL}/account/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ login: email, password }),
  });

  if (!response.ok) {
    throw new Error('Ошибка авторизации');
  }

  return response.json();
};

// Функция для выхода
export const logout = async () => {
  // Очищаем localStorage
  localStorage.removeItem('accessToken');
  localStorage.removeItem('expire');
};
