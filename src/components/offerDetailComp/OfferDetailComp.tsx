import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./_OfferDetailComp.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { getDetail } from "../../redux/actions/detailActions";
import { selectDetail, cleanDetail } from "../../redux/slices/detailSlice";
import TagComp from "../../components/tagComp/TagComp";

const OfferDetailComp = () => {

  const [isLoading, setIsLoading] = useState(true);

  const { offerId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { 
    data, 
    // loading, 
    error } = useSelector(selectDetail);
  // const  data = useSelector(selectDetail);

  useEffect(() => {

    if (offerId) {
      dispatch(getDetail(offerId)).then(() => {
        setIsLoading(false); // Establecer isLoading a false después de que la solicitud se haya completado
      });
    }

    // Clean up detail on component unmount
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, offerId]);

  console.log('data en detail: ', data)

  useEffect(() => {
    if (error) {
      Swal.fire(
        "Error 404",
        "No fué posible obtener los datos de la oferta. Intente más tarde.",
        "error"
      );
      navigate("/");
    }
  }, [error, navigate]);


  return (
    isLoading ? (
      <h2>Loading...</h2>
    ) : (
      data !== null && (
        <div className={styles.main_container}>
          <img 
            src={data.images[0].path}
            alt="imagen de la oferta"
            className={styles.card_image}
          />
          <div className={styles.offer_info}>
            <h5 className={styles.card_item_title}>{data.title}</h5>
            <p>{data.description}</p> 
          </div>
          <div className={styles.card_attr_container}>
            {data.attributes.map((tag_data:any) => (
              <div key={tag_data.id}>
                <TagComp data={tag_data}></TagComp>
              </div>
            ))}
          </div>
          <div className={styles.card_store_data}>
            <div className={styles.card_logo}>L</div>
            <div className={styles.store_info_container}>
              <p className={styles.store_name}>Nombre del restaurante</p>
              <p className={styles.store_address}>Dirección restaurante</p>
            </div>
          </div>
          <h6 className={styles.card_item_price}>
            Aprovecha esta oferta por ${data.price}
          </h6>
          <Link to='/'
            className={styles.card_link_button}
          >
            <button
              className={styles.back_button}>
                <FontAwesomeIcon 
                  className={styles.tag_icon} 
                  icon={faArrowCircleLeft}
                />
                  Volver
            </button>
          </Link>
        </div>
      )
    )
  )
};

export default OfferDetailComp;
