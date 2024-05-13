import Slider from 'react-slick';
import styles from './_PremiumOfferSliderComp.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PremiumOfferCardComp from '../premiumOfferCardComp/PremiumOfferCardComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

const OfferSliderComp = (data: any) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 30000
      };

      const datos = data.data
    
      return (
          <div className={styles.pa_container}>
            <div className={styles.pa_title_container}>
              <h5 className={styles.pa_title}>
                Ofertas premium del día
              </h5>
              <FontAwesomeIcon className={styles.crown_icon} icon={faCrown} />
            </div>
            <div className={styles.pa_item_container}>
              <Slider {...settings}>
                  {datos.map((item: any) => (
                <div key={item.id}>
                  <PremiumOfferCardComp data={item} type={1}  />
                </div>
                  ))}
              </Slider>
            </div>
          </div>
      );
}

export default OfferSliderComp;