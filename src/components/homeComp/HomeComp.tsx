import OfferSliderComp from '../offerSliderComp/OfferSliderComp';
import styles from './_HomeComp.module.scss';
import data from '../../../src/data.json'
import categories from '../../../src/categories.json'
import OfferListComp from '../offerListComp/OfferListComp';
import CatSliderComp from '../catSliderComp/CatSliderComp';


const HomeComp = () => {

  return (
    <>    
    <div className={styles.container}>
      <OfferSliderComp data={data}></OfferSliderComp>
    </div>
    <br/>
    <CatSliderComp categories={categories}></CatSliderComp>
      <OfferListComp data={data}></OfferListComp>
    </>

  );
}

export default HomeComp;
