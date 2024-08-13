import styles from './_PremiumOfferCardComp.module.scss'
import TagComp from '../../tagComp/TagComp';

const PremiumOfferCardComp = (data: any) => {

    console.log('data en card: ', data)

  // const img_style = {
  //   height: '40vh', // Altura fija deseada
  //   width: '100%', // Ancho completo
  //   backgroundImage: `url(${data.data.images[0].path})`, // URL de la imagen de fondo
  //   backgroundSize: 'cover', // Cubrir el contenedor
  //   backgroundPosition: 'center', // Centrar la imagen de fondo
  // };

  return (
    <div className={styles.card_item_box}>
      {/* <div className={styles.card_item_header}>
      <span><FontAwesomeIcon icon={faCrown} className="crown-icon" /> Destacado</span>
      </div> */}
      {/* <div
        style={img_style}
        className={styles.card_item_image}/> */}
      <img 
        src={data.data.images[0].path} 
        alt="Imagen de la oferta" 
        className={styles.card_item_image}
      />
      <div className={styles.card_item_bottom}>
        <div className={styles.card_logo}>
          L
        </div>
        <div className={styles.card_item_title_container}>
          <h4 className={styles.card_item_title}>
            {data.data.title}
          </h4>
          <span>
            {data.data.description}
          </span>
        </div>
      </div>
      <div className={styles.card_item_desc}>
        <div className={styles.card_attr_container}>
          {data.data.attributes.map((tag_data:any) => (
            <div key={tag_data.id}>
              <TagComp data={tag_data}></TagComp>
            </div>
          ))}
        </div>
        <h3 className={styles.card_item_price}>
          ${data.data.price}
        </h3>
      </div>
    </div>
  );
}

export default PremiumOfferCardComp;