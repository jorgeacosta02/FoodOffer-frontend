import Slider from 'react-slick';
import styles from './_PremiumOfferSliderComp.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PremiumOfferCardComp from '../premiumOfferCardComp/PremiumOfferCardComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';



const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        display: 'block',
        background: 'transparent',
        right: '15px', 
        zIndex: 1 
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      style={{ ...style, 
        display: 'block',
        background: 'transparent',
        left: '15px', 
        zIndex: 1 
      }}
      className={className}
      onClick={onClick}
    />
  );
};


const PremiumOfferSliderComp = (data: any) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

      let datos = data.data.filter((adv:any) => adv.priorityLevel >= 1);

      console.log('datos en PremiumOfferSliderComp: ', datos);

      return (
          <div className={styles.pa_container}>
            <div className={styles.pa_title_container}>
              <h5 className={styles.pa_title}>
                Ofertas premium del día
              </h5>
              <FontAwesomeIcon className={styles.crown_icon} icon={faCrown} />
            </div>
            <div className={styles.pa_item_container}>
              {
                datos.length === 1?
                  <div>
                    <PremiumOfferCardComp 
                      data={datos[0]} 
                      type={1}  
                    />
                  </div>:
                  <Slider {...settings}>
                      {datos.map((item: any) => (
                        <div key={item.id}>
                          <PremiumOfferCardComp 
                            data={item} 
                            type={1}  
                          />
                        </div>
                      ))}
                  </Slider>
              }
            </div>
          </div>
      );
}

export default PremiumOfferSliderComp;