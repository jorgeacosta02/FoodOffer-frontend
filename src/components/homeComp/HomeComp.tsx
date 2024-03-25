import OfferSliderComp from '../offerSliderComp/OfferSliderComp';
import styles from './_HomeComp.module.scss';
import data from '../../../src/data.json'
import OfferListComp from '../offerListComp/OfferListComp';


const HomeComp = () => {

  return (
    <>    
    <div className={styles.container}>
      <OfferSliderComp data={data}></OfferSliderComp>
    </div>
    <br/>
      <OfferListComp data={data}></OfferListComp>
    </>

  );
}

export default HomeComp;
