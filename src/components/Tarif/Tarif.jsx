import Button from "../Button/Button";
import { Arrow, Lamp, Notebook, GreenMark } from "../../assets";
import "./Tarif.css";

export default function Tarif({ currentTarif = null }) {
  const tarifs = [
    {
      name: "Beginner",
      description: "Для небольшого исследования",
      icon: <Lamp />,
      currentPrice: "799 ₽",
      oldPrice: "1 200 ₽",
      installment: "или 150 ₽/мес. при рассрочке на 24 мес.",
      features: [
        "Безлимитная история запросов",
        "Безопасная сделка",
        "Поддержка 24/7"
      ],
      color: "#FFB64F"
    },
    {
      name: "Pro",
      description: "Для HR и фрилансеров",
      icon: <Arrow />,
      currentPrice: "1 299 ₽",
      oldPrice: "2 600 ₽",
      installment: "или 279 ₽/мес. при рассрочке на 24 мес.",
      features: [
        "Все пункты тарифа Beginner",
        "Экспорт истории",
        "Рекомендации по приоритетам"
      ],
      color: "#7CE3E1"
    },
    {
      name: "Business",
      description: "Для корпоративных клиентов",
      icon: <Notebook />,
      currentPrice: "2 379 ₽",
      oldPrice: "3 700 ₽",
      features: [
        "Все пункты тарифа Pro",
        "Безлимитное количество запросов",
        "Приоритетная поддержка"
      ],
      color: "#000000",
      isDarkHeader: true
    }
  ];

  return (
    <div className="tarif">
      <h2 className="tarif__title">наши тарифы</h2>
      <div className="tarif__cards">
        {tarifs.map((tarif) => (
          <div 
            key={tarif.name}
            className={`tarif-card ${currentTarif === tarif.name ? "tarif-card--current" : ""}`}
            style={{ "--tarif-color": tarif.color }}
          >
            <div className={`tarif-card__header ${tarif.isDarkHeader ? "tarif-card__header--dark" : ""}`}>
              <div className="tarif-card__info">
                <h3 className="tarif-card__name">{tarif.name}</h3>
                <p className="tarif-card__description">{tarif.description}</p>
              </div>
              <div className="tarif-card__icon">{tarif.icon}</div>
            </div>
            
            <div className="tarif-card__content">
              <div>
                <div className="tarif-card__prices">
                  {currentTarif === tarif.name && (
                    <span className="tarif-card__badge">Текущий тариф</span>
                  )}
                  <div className="tarif-card__price-wrapper">
                    <h3 className="tarif-card__current-price">{tarif.currentPrice}</h3>
                    <h3 className="tarif-card__old-price">{tarif.oldPrice}</h3>
                  </div>
                  {tarif.installment && (
                    <p className="tarif-card__installment">{tarif.installment}</p>
                  )}
                </div>
                
                <div className="tarif-card__features">
                  <p>В тариф входит:</p>
                  <ul>
                    {tarif.features.map((feature, index) => (
                      <li key={index} className="tarif-card__feature-item">
                        <GreenMark className="tarif-card__feature-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="tarif-card__button-wrapper">
                <Button 
                  text={currentTarif === tarif.name ? "Перейти в личный кабинет" : "Подробнее"}
                  className="tarif-card__button"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
