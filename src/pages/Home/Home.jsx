import React from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Button from "../../components/Button/Button"
import { ReactComponent as HomeMain } from "../../assets/homemain.svg"
import { ReactComponent as HomeSecond } from "../../assets/homesecond.svg"
import "./Home.css"
import Utp from "../../components/Utp/Utp"

export default function Home() {
  return (
    <>
    <div className="content">
      <Header />
      <main>
        <div className="hero">
          <div className="hero-text">
            <h1>сервис по поиску публикаций о компании по его ИНН</h1>
            <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
            <Button />
          </div>
          <HomeMain />
        </div>
      </main>
      <Utp />
      <HomeSecond className="homesecond"/>
    </div>
    <Footer />
    </>
  )
}
