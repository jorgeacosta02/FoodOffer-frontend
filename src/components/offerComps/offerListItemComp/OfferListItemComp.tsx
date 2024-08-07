import { faCrown } from '@fortawesome/free-solid-svg-icons';
import styles from './_OfferListItemComp.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TagComp from '../../tagComp/TagComp';

const OfferListItemComp = (data: any) => {

  const img_style = {
    height: '300px', // Altura fija deseada
    width: '100%', // Ancho completo
    backgroundImage: `url(${data.data.images[0].path})`, // URL de la imagen de fondo
    backgroundSize: 'cover', // Cubrir el contenedor
    backgroundPosition: 'center', // Centrar la imagen de fondo
  };

  return (
    <div className={styles.list_item_box}>
      <img 
        src={data.data.images[0].path}
        alt="Imagen de la oferta"
        className={styles.list_item_image}
      />
      {/* <div style={img_style} className={styles.list_item_image}/> */}
      <div className={styles.list_item_details}>
        <div className={styles.list_item_top}>
          <h5 className={styles.list_item_title}>{data.data.title}</h5> 
          <p className={styles.crown_icon}><FontAwesomeIcon icon={faCrown}  /></p>
        </div>
        <div className={styles.list_item_middle}>
          <div className={styles.card_logo}>L</div>
          <span>{data.data.commerce.name}</span>
        </div>
        <div className={styles.card_attr_container}>
          {data.data.attributes.map((tag_data:any) => (
            <div key={tag_data.id}>
              <TagComp data={tag_data}></TagComp>
            </div>
          ))}
        </div>
        <div className={styles.list_item_bottom}>
          <h6 className={styles.list_item_price}>${data.data.price}</h6>
        </div>
      </div>
    </div>
  );
}

export default OfferListItemComp;