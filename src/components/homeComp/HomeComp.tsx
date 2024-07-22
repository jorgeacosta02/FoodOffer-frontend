import PremiumOfferSliderComp from '../premiumComps/premiumOfferSliderComp/PremiumOfferSliderComp';
import styles from './_HomeComp.module.scss';
import data from '../../../src/data.json'
import categories from '../../../src/categories.json'
import OfferListComp from '../offerComps/offerListComp/OfferListComp';
import CatSliderComp from '../catSliderComp/CatSliderComp';
import { useEffect } from 'react';
// import premiumAdvSlice from '../../redux/slices/premiumAdvSlice';
import axios from 'axios';
import { useSelector } from 'react-redux';
import premiumAdvSlice from '../../redux/slices/premiumAdvSlice';

const HomeComp = () => {

  const premiumAdvSlice = useSelector(premiumAdvSlice)

  useEffect(()=> {
    getAdvertising();
  })
  const getAdvertising = () => {
     await axios('/premiumAdv')
     .then((res)=> console.log(res))
     .catch(err => console.log(err.response.data));
  }

  return (
    <div className={styles.main_container}>    
      <div className={styles.container}>
        <PremiumOfferSliderComp data={data}></PremiumOfferSliderComp>
      </div>
      <br/>
      <CatSliderComp categories={categories}></CatSliderComp>
      <OfferListComp data={data}></OfferListComp>
    </div>
  );
}

export default HomeComp;
