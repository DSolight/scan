import Slider from 'react-slick';
import './HistogramCarousel.css';

export default function HistogramCarousel({ data }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="histogram-carousel">
      <h3>Распределение публикаций</h3>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="histogram-item">
            <div className="histogram-date">{new Date(item.date).toLocaleDateString()}</div>
            <div className="histogram-bar" style={{ height: `${item.value * 2}px` }}></div>
            <div className="histogram-value">{item.value}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
