import PremiumOfferSliderComp from '../premiumComps/premiumOfferSliderComp/PremiumOfferSliderComp';
import styles from './_HomeComp.module.scss';
// import categories from '../../../src/categories.json'
import OfferListComp from '../offerComps/offerListComp/OfferListComp';
import CatSliderComp from '../catSliderComp/CatSliderComp';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectPremiumAdv, cleanPremiumAdvs } from '../../redux/slices/premiumAdvSlice';
import { getAllPremiumAdv } from '../../redux/actions/premiumAdvActions';
import { selectCategories, cleanCategories } from '../../redux/slices/categoriesSlice';
import { getCategories } from '../../redux/actions/categoryActions';


const HomeComp = () => {

  const dispatch = useDispatch();
  const premiumAdvReducer = useSelector(selectPremiumAdv);
  const categoriesReducer = useSelector(selectCategories);

  console.log('premiumAdvReducer.data: ', premiumAdvReducer.data);
  console.log('categoriesReducer: ', categoriesReducer);

  useEffect(() => {
    getAllPremiumAdvFunc();
    // getCategoriesFunc();
    return () => {
      dispatch(cleanPremiumAdvs());
      // dispatch(cleanCategories());
    };
  }, [dispatch]);

  useEffect(() => {
    // getAllPremiumAdvFunc();
    getCategoriesFunc();
    return () => {
      // dispatch(cleanPremiumAdvs());
      dispatch(cleanCategories());
    };
  }, [dispatch]);


  const getAllPremiumAdvFunc = async () => {
    await dispatch(getAllPremiumAdv());
  }

  const getCategoriesFunc = async () => {
    await dispatch(getCategories());
  }

  console.log('categoriesReducer:', categoriesReducer)

  return (
    <div className={styles.main_container}>    
      <div 
        className={styles.container}
      >
        {
          premiumAdvReducer.data? 
          <PremiumOfferSliderComp data={premiumAdvReducer.data}/>
          :""
        }
      </div>

      {
        categoriesReducer?.data?
        <CatSliderComp 
          categories={categoriesReducer.data}
        />:""
      }

      {
        premiumAdvReducer.data? 
        <OfferListComp data={premiumAdvReducer.data}/>
        :""
      }
    </div>
  );
}

export default HomeComp;
