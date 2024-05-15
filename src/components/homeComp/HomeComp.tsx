import PremiumOfferSliderComp from '../premiumComps/premiumOfferSliderComp/PremiumOfferSliderComp';
import styles from './_HomeComp.module.scss';
import data from '../../../src/data.json'
import categories from '../../../src/categories.json'
import OfferListComp from '../offerComps/offerListComp/OfferListComp';
import CatSliderComp from '../catSliderComp/CatSliderComp';
import { useEffect } from 'react';
import  { getReq } from '../../helpers/genericService'

const HomeComp = () => {

useEffect(()=> {
  getAdvertising();
})
  const getAdvertising = async () => {
     await getReq('user/getAdvertising?userId=0')
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
