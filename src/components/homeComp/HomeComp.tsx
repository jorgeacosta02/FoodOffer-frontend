import PremiumOfferSliderComp from '../premiumComps/premiumOfferSliderComp/PremiumOfferSliderComp';
import styles from './_HomeComp.module.scss';
// import categories from '../../../src/categories.json'
import OfferListComp from '../offerComps/offerListComp/OfferListComp';
import CatSliderComp from '../catSliderComp/CatSliderComp';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectAdvertisings, cleanAdvertisings } from '../../redux/slices/advertisingSlice';
import { getAllAdvertising } from '../../redux/actions/advertisingActions';
import { selectCategories, cleanCategories } from '../../redux/slices/categoriesSlice';
import { getCategories } from '../../redux/actions/categoryActions';


const HomeComp = () => {

  const dispatch = useDispatch();
  const advertisingReducer = useSelector(selectAdvertisings);
  const categoriesReducer = useSelector(selectCategories);

  // console.log('advertisingReducer.data: ', advertisingReducer.data);
  console.log('categoriesReducer: ', categoriesReducer);

  useEffect(() => {
    getCategoriesFunc();
    getAllAdvertisingFunc();
    return () => {
      dispatch(cleanAdvertisings());
      dispatch(cleanCategories());
    };
  }, [dispatch]);

  const getAllAdvertisingFunc = async () => {
    await dispatch(getAllAdvertising());
  }

  const getCategoriesFunc = async () => {
    await dispatch(getCategories());
  }

  return (
    <div className={styles.main_container}>    
      <div 
        className={styles.container}
      >
        {
          advertisingReducer?.data? 
          <PremiumOfferSliderComp data={advertisingReducer.data}/>
          :""
        }
      </div>
      {
        categoriesReducer?.data?
        <CatSliderComp 
          categories={categoriesReducer}
        />:
        "No hay categorías para mostrar"
      }
      {
        advertisingReducer?.data? 
        <OfferListComp data={advertisingReducer.data}/>
        :"No hay avisos para mostrar"
      }
    </div>
  );
}

export default HomeComp;
