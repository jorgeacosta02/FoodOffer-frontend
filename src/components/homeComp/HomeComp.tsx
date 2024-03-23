import styles from './_HomeComp.module.scss';


const HomeComp = () => {


  return (
    <div className={styles.container}>
      {/* <div className={styles.slider}>
        {images.map((image, index) => (
          <div
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            key={index}
          >
            <img
              src={image}
              alt=""
              className={styles.img}
              />
          </div>
        ))}
      </div> */}
      <div className={styles.div}>
        <h1>Presentación</h1>
        <h1>Especialidades</h1>
        <h1>Profesionales</h1>
        <h1>Ubicación</h1>
      </div>
    </div>
  );
}

export default HomeComp;
