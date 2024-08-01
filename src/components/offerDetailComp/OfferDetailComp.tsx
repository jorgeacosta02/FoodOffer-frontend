import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./_OfferDetailComp.module.scss";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import data from "../../data.json";
import TagComp from "../../components/tagComp/TagComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const OfferDetailComp = () => {
  interface ResData {
    id: string;
    title: string;
    image: string;
    description: string;
    price: string;
  }
  const { offerId } = useParams();
  const navigate = useNavigate();
  const [resData, setData] = useState<ResData>(null);

  useEffect(() => {
    getActivitiesDetail();
  }, []);

  const getActivitiesDetail = async () => {
    try {
      const index = data.findIndex((d) => d.id == offerId);
      if (index !== -1) {
        setData(data[index]);
      }

      // const res = await getReq(`/admin/activities/${id}`);
      // setData(res.data);
    } catch (err) {
      Swal.fire(
        "Error 404",
        "No fué posible obtener los datos de la oferta. Intente más tarde.",
        "error"
      );
      navigate("/");
    }
  };

  let img_style = {};

  if (resData !== null) {
    img_style = {
      height: "300px", // Altura fija deseada
      width: "100%", // Ancho completo
      backgroundImage: `url(${resData.image})`, // URL de la imagen de fondo
      backgroundSize: "cover", // Cubrir el contenedor
      backgroundPosition: "center", // Centrar la imagen de fondo
    };
  }

  const offer_characteristic = [{
    code: 1,
    check: true,
    description: "Sin TACC",
  }, {
    code: 2,
    check: false,
    description: "Vegano",
  }];

  return resData !== null ? (
    <div className={styles.detail_box}>
      <div style={img_style} className={styles.card_item_image} />
      <div className={styles.offer_info}>
        <h5 className={styles.card_item_title}>{resData.title}</h5>
        <p>{resData.description}</p>
      </div>
      <div className={styles.card_item_desc}>
        {offer_characteristic.map((tag_data) => (
          <div key={tag_data.code}>
          <TagComp data={tag_data}></TagComp>
        </div>
        ))}
      </div>
      <div className={styles.card_item_bottom}>
        <div className={styles.card_logo}>L</div>
        <div className={styles.store_info_container}>
          <p className={styles.store_name}>Nombre del restaurante</p>
          <p className={styles.store_address}>Dirección restaurante</p>
        </div>
      </div>
      <h6 className={styles.card_item_price}>Aprovecha esta oferta por ${resData.price}</h6>
      <Link to='/'>
        <button className={styles.back_button}><FontAwesomeIcon className={styles.tag_icon} icon={ faArrowCircleLeft } />Volver</button>
      </Link>
    </div>
  ) : (
    <>
      <h2>Loading...</h2>
    </>
  );
};

export default OfferDetailComp;
