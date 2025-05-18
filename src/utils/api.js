const BASE_URL = "https://gateway.scan-interfax.ru/api/v1"

// Общий метод для запросов с авторизацией
export const apiRequest = async (endpoint, method = "GET", body = null) => {
  const token = localStorage.getItem("accessToken")
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  }

  const config = {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, config)

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || "Ошибка запроса")
  }

  return response.json()
}

// Авторизация
export const login = async (credentials) => {
  return apiRequest("/account/login", "POST", credentials)
}

// Выход
export const logout = () => {
  localStorage.removeItem("accessToken")
  localStorage.removeItem("expire")
}
