import PremiumOfferSliderComp from '../premiumComps/premiumOfferSliderComp/PremiumOfferSliderComp';
import styles from './_HomeComp.module.scss';
import OfferListComp from '../offerComps/offerListComp/OfferListComp';
import CatSliderComp from '../catSliderComp/CatSliderComp';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectAdvertisings, cleanAdvertisings } from '../../redux/slices/advertisingSlice';
import { getAllAdvertising } from '../../redux/actions/advertisingActions';
import { selectCategories, cleanCategories } from '../../redux/slices/categoriesSlice';
import { getCategories } from '../../redux/actions/categoryActions';
import { selectCategoryCodes, cleanCategoryCodes } from '../../redux/slices/categoryCodesSlice';
import BackButtonComp from "../backButtonComp/BackButtonComp";
import MoreFiltersComp from '../moreFiltersComp/MoreFiltersComp';
import { toggleStyle } from '../../redux/slices/fltersSlice';


const HomeComp = () => {

  const dispatch = useDispatch();
  const advertisingReducer = useSelector(selectAdvertisings);
  const categoriesReducer = useSelector(selectCategories);
  const categoryCodesReducer = useSelector(selectCategoryCodes);

  // console.log('advertisingReducer.data: ', advertisingReducer.data);
  // console.log('categoriesReducer: ', categoriesReducer);
  // console.log('categoryCodesReducer en home: ', categoryCodesReducer?.data);

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
  
  const advertisings = advertisingReducer.data;
  // console.log('advertisings en home: ', advertisings);
  let CatCode = categoryCodesReducer.data[0];
  // console.log('CatCode: ', CatCode);
  let filteredAdvertisings: any[];
  if (advertisings && CatCode === 0){
    filteredAdvertisings = advertisings;
  }else if(advertisings) {
    filteredAdvertisings = advertisings.filter(adv => adv.categoryCode == CatCode)
  }
  // console.log('filteredAdvertisings: ', filteredAdvertisings);
  
  const cleanCategoryCode = () => {
    dispatch(cleanCategoryCodes())
  }

  const toggleFiltersComp = () => {
    dispatch(toggleStyle())
  }

  // const 

  return (
    <div className={styles.main_container}>
      <MoreFiltersComp/>
      <BackButtonComp/>
      <div 
        className={styles.premium_container}
      >
        {
          advertisingReducer?.data? 
          <PremiumOfferSliderComp data={advertisingReducer.data}/>
          :""
        }
      </div>
      <div
        className={styles.category_container}
      >
        {
          categoriesReducer?.data?
          <CatSliderComp 
          categories={categoriesReducer}
          />:
          "No hay categorías para mostrar"
        }
        <div
          className={styles.button_container}
        >

          <button onClick={toggleFiltersComp}
            className={styles.all_button}
          >
            <p>
              Más filtros
            </p>
          </button>
        </div>
        <div
          className={styles.button_container}
        >

          <button onClick={cleanCategoryCode}
            className={styles.all_button}
            >
            <p>
              Ver todos los anuncios
            </p>
          </button>
        </div>

      </div>
      {
        advertisingReducer?.data? 
        <OfferListComp data={filteredAdvertisings}/>
        :"No hay avisos para mostrar"
      }
    </div>
  );
}

export default HomeComp;
