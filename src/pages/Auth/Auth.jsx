import React from "react"
import Header from "../../components/Header/Header"
import AuthForm from "../../components/AuthForm/AuthForm"

export default function Auth() {
  return (
    <div>
      <Header />
      <h1>Авторизация</h1>
      <AuthForm />
    </div>
  )
}
