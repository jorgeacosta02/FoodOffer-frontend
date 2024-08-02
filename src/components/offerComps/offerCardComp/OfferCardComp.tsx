import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './_OfferCardComp.module.scss'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';


const OfferCardComp = (data: any) => {

  console.log('data.data.images: ', data.data.images)

  const img_style = {
    height: '300px', // Altura fija deseada
    width: '100%', // Ancho completo
    backgroundImage: `url(${data.data.images[0].path})`, // URL de la imagen de fondo
    backgroundSize: 'cover', // Cubrir el contenedor
    backgroundPosition: 'center', // Centrar la imagen de fondo
  };

  return (
       <div className={styles.card_item_box}>
        {/* <div className={styles.card_item_header}>
        <span><FontAwesomeIcon icon={faCrown} className="crown-icon" /> Destacado</span>
        </div> */}
        <div style={img_style} className={styles.card_item_image}/>
        <h6 className={styles.card_item_title}>{data.data.title}</h6>
        <div className={styles.card_item_bottom}>
          <div className={styles.card_logo}>L</div>
        <div className={styles.card_item_title_container}>

          <span className={styles.res_name}>Nombre del restaurante</span>
          </div>
        </div>

        
        <div className={styles.card_item_desc}>
        <div>
        <span className={styles.card_tag}>
          <FontAwesomeIcon className={styles.tag_icon} icon={faCircleCheck} />
            Sin TACC</span>
        </div>
          <h6 className={styles.card_item_price}>${data.data.price}</h6>
        </div>



        </div>
  );
}

export default OfferCardComp;