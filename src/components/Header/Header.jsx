import react from "react";
import logo from '../../assets/logo.png'
import HeaderLogin from './HeaderLogin'

export default function Header () {
  return(
    <div>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>Главная</li>
          <li>Тарифы</li>
          <li>FAQ</li>
        </ul>
      </nav>
      <HeaderLogin/>
    </div>
  )
}
