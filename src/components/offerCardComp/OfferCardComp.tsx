import styles from './_OfferCardComp.module.scss'


const OfferCardComp = (data: any) => {

  return (
       <div className={styles.card_item_box}>
        <div className={styles.card_item_header}>
        {/* <span><FontAwesomeIcon icon={faCrown} className="crown-icon" /> Destacado</span> */}
        </div>
        <img src={data.data.image} className={styles.card_item_image} alt={data.data.title} />
        <h4 className={styles.card_item_title}>{data.data.title}</h4>
                    <h3 className={styles.card_item_price}>${data.data.price}</h3>

            <div className={styles.card_item_bottom}>
              <button className={styles.card_item_button}>Me sirve!</button>
            </div>
            <span>Cant.Disponible: 5un.</span>
        </div>
  );
}

export default OfferCardComp;