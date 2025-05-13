import { ReactComponent as Utpleft } from "../../assets/utpleft.svg"
import { ReactComponent as Utpright } from "../../assets/utpright.svg"
import { ReactComponent as Clock } from "../../assets/clock.svg"
import { ReactComponent as Loupe } from "../../assets/loupe.svg"
import { ReactComponent as Security } from "../../assets/sec.svg"
import "./Utp.css"

export default function Utp() {
  return (
    <>
      <h2>Почему именно мы</h2>
      <div className="utp-line">
        <Utpleft />
        <div className="utp-line__item">
          <Clock />
          <p>Высокая и оперативная скорость обработки заявки</p>
        </div>
        <div className="utp-line__item">
          <Loupe />
          <p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
        </div>
        <div className="utp-line__item">
          <Security />
          <p>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p>
        </div>
        <Utpright />
      </div>
    </>
  )
}
