import { useState } from 'react';
import { Utpleft, Utpright, Clock, Loupe, Security } from "../../assets";
import "./Utp.css";

export default function Utp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState('next');
  
  const items = [
    { icon: <Clock />, text: "Высокая скорость обработки заявки" },
    { icon: <Loupe />, text: "Комплексная база данных" },
    { icon: <Security />, text: "Защита конфиденциальных сведений" },
    { icon: <Clock />, text: "Дополнительный сервис 24/7" },
    { icon: <Loupe />, text: "Интеграция с CRM" },
    { icon: <Security />, text: "Автоматическое обновление данных" }
  ];

  const nextSlide = () => {
    setTransitionDirection('next');
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setTransitionDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const visibleCards = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % items.length;
    visibleCards.push(items[index]);
  }

  return (
    <div className="utp-wrapper">
      <h2 className="utp-heading">Почему именно мы</h2>
      
      <div className="utp-slider">
        <button onClick={prevSlide} className="utp-arrow">
          <Utpleft />
        </button>
        
        <div className={`utp-cards ${transitionDirection}`}>
          {visibleCards.map((item, index) => (
            <div key={`${currentIndex}-${index}`} className="utp-card">
              <div className="utp-icon">{item.icon}</div>
              <p className="utp-text">{item.text}</p>
            </div>
          ))}
        </div>
        
        <button onClick={nextSlide} className="utp-arrow">
          <Utpright />
        </button>
      </div>
    </div>
  );
}
