import OfferSliderComp from '../offerSliderComp/OfferSliderComp';
import styles from './_HomeComp.module.scss';
import data from '../../../src/data.json'


const HomeComp = () => {

  return (
    <div className={styles.container}>
      <OfferSliderComp data={data}></OfferSliderComp>
    </div>
  );
}

export default HomeComp;
