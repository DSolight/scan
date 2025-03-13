import React from "react"
import Header from "../../components/Header/Header"
import { ReactComponent as HomeMain } from "../../assets/homemain.svg"
import "./Home.css"

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="hero">
          <div className="hero-text">
            <h1>сервис по поиску публикаций о компании по его ИНН</h1>
            <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
            <button>Запросить данные</button>
          </div>
          <HomeMain />
        </div>
      </main>
    </div>
  )
}
