import styles from './_PremiumOfferCardComp.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';


const PremiumOfferCardComp = (data: any) => {

  const img_style = {
    height: '300px', // Altura fija deseada
    width: '100%', // Ancho completo
    backgroundImage: `url(${data.data.image})`, // URL de la imagen de fondo
    backgroundSize: 'cover', // Cubrir el contenedor
    backgroundPosition: 'center', // Centrar la imagen de fondo
  };

  return (
       <div className={styles.card_item_box}>
        {/* <div className={styles.card_item_header}>
        <span><FontAwesomeIcon icon={faCrown} className="crown-icon" /> Destacado</span>
        </div> */}
        <div style={img_style} className={styles.card_item_image}/>
        <div className={styles.card_item_bottom}>
          <div className={styles.card_logo}>L</div>
        <div className={styles.card_item_title_container}>
          <h4 className={styles.card_item_title}>{data.data.title}</h4>
          <span>Nombre del restaurante</span>
          </div>
        </div>

        <div className={styles.card_item_desc}>
          <span className={styles.card_tag}>
          <FontAwesomeIcon className={styles.tag_icon} icon={faCircleCheck} />
            Sin TACC</span>
          <h3 className={styles.card_item_price}>${data.data.price}</h3>
        </div>



        </div>
  );
}

export default PremiumOfferCardComp;