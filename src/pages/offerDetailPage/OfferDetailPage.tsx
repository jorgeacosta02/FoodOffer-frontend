import { useNavigate, useParams } from 'react-router-dom';
import styles from './_OfferDetailPage.module.scss'
import { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import data from '../../data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';




const OfferDetailPage = () => {

  interface ResData {
    id: string,
    title: string,
    image: string,
    description: string,
   price: string
  }
  const { offerId } = useParams();
  const navigate = useNavigate();
  const [resData, setData] = useState<ResData>(null);

  useEffect(() => {
    console.log(data)
    console.log(offerId)
    getActivitiesDetail();
  }, []);

  const getActivitiesDetail = async () => {
    try {

      const index = data.findIndex(d => d.id == offerId)
      if(index !== -1){
        setData(data[index]);
      }

       // const res = await getReq(`/admin/activities/${id}`);
      // setData(res.data);
    } catch (err) {
      Swal.fire("Error 404", "No fué posible obtener los datos de la oferta. Intente más tarde.", "error");
      navigate("/");
    }
  };

  let img_style = {};

  if(resData !== null) {
    img_style = {
      height: '300px', // Altura fija deseada
      width: '100%', // Ancho completo
      backgroundImage: `url(${resData.image})`, // URL de la imagen de fondo
      backgroundSize: 'cover', // Cubrir el contenedor
      backgroundPosition: 'center', // Centrar la imagen de fondo
    };
  }


  return (
      resData !== null ? (
       <div className={styles.detail_box}>
        {/* <div className={styles.card_item_header}>
        <span><FontAwesomeIcon icon={faCrown} className="crown-icon" /> Destacado</span>
        </div> */}
        <div style={img_style} className={styles.card_item_image}/>
        <h6 className={styles.card_item_title}>{resData.title}</h6>
        <p>{resData.description}</p>


        
        <div className={styles.card_item_desc}>
        <div>
        <span className={styles.card_tag}>
          <FontAwesomeIcon className={styles.tag_icon} icon={faCircleCheck} />
            Sin TACC</span>
        </div>
          <h6 className={styles.card_item_price}>${resData.price}</h6>
        </div>
        <div className={styles.card_item_bottom}>
          <div className={styles.card_logo}>L</div>
        <div className={styles.card_item_title_container}>

          <span className={styles.res_name}>Nombre del restaurante</span>
          </div>
        </div>


        </div> ) : (<><h2>Loading...</h2></>)
  );
}

export default OfferDetailPage