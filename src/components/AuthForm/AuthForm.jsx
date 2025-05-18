import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../utils/authSlice"
import Button from "../Button/Button"
import { Google, Facebook, Yandex } from "../../assets"
import "./AuthForm.css"

export default function AuthForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [activeTab, setActiveTab] = useState("login")

  const isFormValid = email && password

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isFormValid) return

    setIsLoading(true)
    setError("")

    try {
      const result = await dispatch(loginUser({ email, password })).unwrap()
      localStorage.setItem(
        "authData",
        JSON.stringify({
          accessToken: result.accessToken,
          expire: result.expire,
        }),
      )

      navigate("/")
    } catch (err) {
      setError(err.message || "Произошла ошибка при авторизации")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="auth-form">
      <div className="auth-form__head">
        <button
          className={`auth-form__tab ${activeTab === "login" ? "active" : ""}`}
          onClick={() => setActiveTab("login")}
        >
          Войти
        </button>
        <button
          className={`auth-form__tab ${activeTab === "register" ? "active" : ""}`}
          onClick={() => setActiveTab("register")}
        >
          Зарегистрироваться
        </button>
      </div>

      {activeTab === "login" ? (
        <form onSubmit={handleSubmit}>
          <div className="auth-form__field">
            <label>Логин или номер телефона:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="auth-form__field">
            <label>Пароль:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="auth-form__error">{error}</div>}

          <Button
            type="submit"
            text={isLoading ? "Загрузка..." : "Войти"}
            disabled={!isFormValid || isLoading}
            className="auth-form__submit"
            onClick={handleSubmit} // Добавляем обработчик
          />

          <div className="auth-form__links">
            <Link
              to="#"
              className="auth-form__link"
            >
              Восстановить пароль
            </Link>
          </div>

          <div className="auth-form__social">
            <p>Войти через:</p>
            <div className="auth-form__social-buttons">
              <button
                type="button"
                className="auth-form__social-btn google"
              >
                <Google />
              </button>
              <button
                type="button"
                className="auth-form__social-btn facebook"
              >
                <Facebook />
              </button>
              <button
                type="button"
                className="auth-form__social-btn yandex"
              >
                <Yandex />
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="auth-form__register-notice">
          <p>Функция регистрации временно недоступна</p>
        </div>
      )}
    </div>
  )
}
