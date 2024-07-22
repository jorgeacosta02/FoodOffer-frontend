// import PremiumOfferSliderComp from '../premiumComps/premiumOfferSliderComp/PremiumOfferSliderComp';
// import styles from './_HomeComp.module.scss';
// import data from '../../../src/data.json'
// import categories from '../../../src/categories.json'
// import OfferListComp from '../offerComps/offerListComp/OfferListComp';
// import CatSliderComp from '../catSliderComp/CatSliderComp';
// import { useEffect } from 'react';
// // import premiumAdvSlice from '../../redux/slices/premiumAdvSlice';
// import axios from 'axios';
// import { useSelector } from 'react-redux';
// import { selectPremiumAdv, cleanPremiumAdvs } from '../../redux/slices/premiumAdvSlice';
// import { getAllPremiumAdv } from '../../redux/actions/premiumAdvActions';
// import { useDispatch } from 'react-redux';


// const HomeComp = () => {

//   const dispatch = useDispatch();
//   const premiumAdvReducer = useSelector(selectPremiumAdv);

//   console.log('premiumAdvReducer: ', premiumAdvReducer);

//   useEffect(()=> {
//     getAdvertising();
//     dispatch(getAllPremiumAdv());
//     return () => {
//       dispatch(cleanPremiumAdvs()); // Limpiar el estado si es necesario al desmontar el componente
//     };
//   })
//   const getAdvertising = async () => {
//      await axios('/premiumAdv')
//      .then((res)=> console.log(res))
//      .catch(err => console.log(err.response.data));
//   }

//   // const getPremiumAdv = () => {
    
//   // }

//   return (
//     <div className={styles.main_container}>    
//       <div className={styles.container}>
//         <PremiumOfferSliderComp data={data}></PremiumOfferSliderComp>
//       </div>
//       <br/>
//       <CatSliderComp categories={categories}></CatSliderComp>
//       <OfferListComp data={data}></OfferListComp>
//     </div>
//   );
// }

// export default HomeComp;



import PremiumOfferSliderComp from '../premiumComps/premiumOfferSliderComp/PremiumOfferSliderComp';
import styles from './_HomeComp.module.scss';
// import categories from '../../../src/categories.json'
// import OfferListComp from '../offerComps/offerListComp/OfferListComp';
// import CatSliderComp from '../catSliderComp/CatSliderComp';
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
      {/* <CatSliderComp categories={categories}></CatSliderComp>
      <OfferListComp data={premiumAdvReducer.data}></OfferListComp> */}
    </div>
  );
}

export default HomeComp;
