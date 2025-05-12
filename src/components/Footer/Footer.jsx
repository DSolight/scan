import React from "react"
import logof from "../../assets/logof.svg"
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <img
        src={logof}
        alt="logof"
      />
      <div>
        <p>г. Москва, Цветной б-р, 40 +7 495 771 21 11 info@skan.ru</p>
        <p>Copyright. 2025</p>
      </div>
    </div>
  )
}
