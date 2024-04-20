import styles from "./_FooterComp.module.scss";

const FooterComp = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>FoodOffer &reg; 2024</p>
      <p className={styles.text}>| Todos los derechos reservados |</p>
    </div>
  );
};

export default FooterComp;
