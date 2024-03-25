import Slider from 'react-slick';
import styles from './_OfferSliderComp.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PremiumOfferCardComp from '../premiumOfferCardComp/PremiumOfferCardComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

const OfferSliderComp = (data: any) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
      };

      const datos = data.data
    
      return (
        <>
          <div className={styles.pa_container}>
            <div className={styles.pa_title_container}>
            <h3 className={styles.pa_title}>
              Ofertas premium
            </h3>
            <FontAwesomeIcon className={styles.crown_icon} icon={faCrown} />
            </div>
            <div className={styles.pa_item_container}>
        <Slider {...settings}>
            {datos.map((item: any) => (
          <div>
            <PremiumOfferCardComp data={item} key={item.id} />
          </div>
            ))}
        </Slider>
            </div>
          </div>
        </>
      );
}

export default OfferSliderComp;