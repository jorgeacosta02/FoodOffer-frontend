import PremiumOfferSliderComp from '../premiumComps/premiumOfferSliderComp/PremiumOfferSliderComp';
import styles from './_HomeComp.module.scss';
import categories from '../../../src/categories.json'
import OfferListComp from '../offerComps/offerListComp/OfferListComp';
import CatSliderComp from '../catSliderComp/CatSliderComp';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectPremiumAdv, cleanPremiumAdvs } from '../../redux/slices/premiumAdvSlice';
import { getAllPremiumAdv } from '../../redux/actions/premiumAdvActions'; // Importa la acción correctamente

const HomeComp = () => {

  const dispatch = useDispatch();
  const premiumAdvReducer = useSelector(selectPremiumAdv);

  console.log('premiumAdvReducer.data: ', premiumAdvReducer.data);

  useEffect(() => {
    getAllPremiumAdvFunc();
    return () => {
      dispatch(cleanPremiumAdvs()); // Limpiar el estado si es necesario al desmontar el componente
    };
  }, [dispatch]);


  const getAllPremiumAdvFunc = async () => {
    await dispatch(getAllPremiumAdv());
  }

  return (
    <div className={styles.main_container}>    
      <div className={styles.container}>
        {
          premiumAdvReducer.data? <PremiumOfferSliderComp data={premiumAdvReducer.data}></PremiumOfferSliderComp>:""
        }
      </div>
      <br/>
      <CatSliderComp categories={categories}></CatSliderComp>
      {
        premiumAdvReducer.data? <OfferListComp data={premiumAdvReducer.data}></OfferListComp> :""
      }
    </div>
  );
}

export default HomeComp;
