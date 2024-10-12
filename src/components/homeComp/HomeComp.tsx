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
import { selectCategoryCodes } from '../../redux/slices/categoryCodesSlice';


const HomeComp = () => {

  const dispatch = useDispatch();
  const advertisingReducer = useSelector(selectAdvertisings);
  const categoriesReducer = useSelector(selectCategories);
  const categoryCodesReducer = useSelector(selectCategoryCodes);

  // console.log('advertisingReducer.data: ', advertisingReducer.data);
  // console.log('categoriesReducer: ', categoriesReducer);
  console.log('categoryCodesReducer en home: ', categoryCodesReducer?.data);

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
  console.log('advertisings en home: ', advertisings);
  let CatCode = categoryCodesReducer.data[0];
  console.log('CatCode: ', CatCode);
  let filteredAdvertisings: any[];
  if (advertisings && CatCode === 0){
    filteredAdvertisings = advertisings;
  }else if(advertisings) {
    filteredAdvertisings = advertisings.filter(adv => adv.categoryCode == CatCode)
  }
  console.log('filteredAdvertisings: ', filteredAdvertisings);
  
  // if (filteredAdvertisings) {
  //   console.log('filteredAdvertisings[0]: ', filteredAdvertisings[0].categoryCode)

  // }else{console.log('no funciona')}

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
        <OfferListComp data={filteredAdvertisings}/>
        :"No hay avisos para mostrar"
      }
    </div>
  );
}

export default HomeComp;
