import { Link } from 'react-router-dom';
import { Logo } from "../../assets";
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import './Header.css';

export default function Header() {
  // Функция для предотвращения перехода по ссылке
  const handleDisabledLink = (e) => {
    e.preventDefault();
  };

  return (
    <div className='header'>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="" onClick={handleDisabledLink}>
              Тарифы
            </Link>
          </li>
          <li>
            <Link to="" onClick={handleDisabledLink}>
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
      <HeaderLogin />
    </div>
  );
}
