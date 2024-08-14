import Slider from "react-slick";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import styles from "./_CatSliderComp.module.scss";
import CatSliderItemComp from "./CatSliderItemComp";




function CatSliderComp(categories: any) {
  
  console.log('categories: ', categories)

  const sliderRef = useRef<Slider>(null);

  const goToPrevSlide = () => {
    if (sliderRef.current !== null && sliderRef.current !== undefined) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current !== null && sliderRef.current !== undefined) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 150,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <div className={styles.qc_container}>
        <h5 className={styles.title}>Consultá todas las ofertas de hoy</h5>
        <div className={styles.slider_container}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={goToPrevSlide}
            className={styles.slider_arrow}
          />
          <div className={styles.slider_items_container}>
            <Slider ref={sliderRef} {...settings}>
              {categories.categories.data.map((item: any) => (
                <div key={item.id}>
                  <CatSliderItemComp
                    category={item}
                  ></CatSliderItemComp>
                </div>
              ))}
            </Slider>
          </div>
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={goToNextSlide}
            className={styles.slider_arrow}
          />
        </div>
      </div>
    </div>
  );
}

export default CatSliderComp;
