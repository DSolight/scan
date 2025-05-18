import Header from "../../components/Header/Header"
import AuthForm from "../../components/AuthForm/AuthForm"
import Footer from "../../components/Footer/Footer"
import { Characters } from "../../assets"
import "./Auth.css"

export default function Auth() {
  return (
    <div>
      <div className="auth-body">
        <Header />
        <div className="auth-main">
          <div className="auth-info">
            <h1>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
            <Characters />
          </div>
          <AuthForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}
