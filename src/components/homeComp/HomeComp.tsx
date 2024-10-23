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
import { selectAttributes, cleanAttributeses } from '../../redux/slices/attributesSlice';
// import { selectCategoryCodes, cleanCategoryCodes } from '../../redux/slices/categoryCodesSlice';
import BackButtonComp from "../backButtonComp/BackButtonComp";
import MoreFiltersComp from '../moreFiltersComp/MoreFiltersComp';
import { selectFilters, toggleStyle, cleanAllFilters } from '../../redux/slices/fltersSlice';
import { getAttributes } from '../../redux/actions/attributesActions';


const HomeComp = () => {

  const dispatch = useDispatch();
  const advertisingReducer = useSelector(selectAdvertisings);
  const categoriesReducer = useSelector(selectCategories);
  const filtersReducer = useSelector(selectFilters);
  const attributesReducer = useSelector(selectAttributes);


  useEffect(() => {
    getCategoriesFunc();
    getAttributesesFunc();
    getAllAdvertisingFunc();
    return () => {
      dispatch(cleanCategories());
      dispatch(cleanAttributeses());
      dispatch(cleanAdvertisings());
    };
  }, [dispatch]);

  const getAllAdvertisingFunc = async () => {
    await dispatch(getAllAdvertising());
  }

  const getAttributesesFunc = async () => {
    await dispatch(getAttributes());
  }

  const getCategoriesFunc = async () => {
    await dispatch(getCategories());
  }
  

  // useEffect(() => {
  //   if (attributesReducer.data) {
  //     console.log('attributesReducer useEffect: ', attributesReducer.data);
  //   }
  // }, [attributesReducer.data]); // Solo imprime cuando los datos cambian
  
  console.log('attributesReducer: ', attributesReducer.data);
  
  const allAdvertisings = advertisingReducer.data;
  let selectedCategories = filtersReducer.categories;
  let selectedAttributes = filtersReducer.attributes;
  let selectedMinPrice = filtersReducer.minPrice;
  let selectedMaxPrice = filtersReducer.maxPrice;
  
  // console.log('Categories: ', Categories)
  // console.log('CatCode: ', CatCode);



  ////////////////////////////////////////////////////////////////////
  // Filtro en cadena por categoría, agrega al filtrado los avisos que pertenecen a la categoría filtrada, y por atributo agrega los avisos que cotienen al menos un attributo seleccionado.

    // Primero filtramos por categorías
  // let catFilteredAdv: any[] = [];

  // if (allAdvertisings && selectedCategories.length > 0) {
  //   catFilteredAdv = allAdvertisings.filter((adv: any) => 
  //     selectedCategories.includes(adv.categoryCode)
  //   );
  // } else {
  //   // Si no hay categorías seleccionadas, usar todos los avisos
  //   catFilteredAdv = allAdvertisings;
  // }

  // // Luego filtramos por atributos, si hay atributos seleccionados
  // let attFilteredAdv: any[] = [];

  // if (catFilteredAdv?.length > 0 && selectedAttributes.length > 0) {
  //   attFilteredAdv = catFilteredAdv.filter((adv: any) => 
  //     Array.isArray(adv.attributes) && adv.attributes.some((attr: any) => 
  //       selectedAttributes.includes(attr.id) // Filtra por `id` de atributo
  //     )
  //   );
  // } else {
  //   // Si no hay atributos seleccionados, usar los avisos filtrados por categoría
  //   attFilteredAdv = catFilteredAdv;
  // }

  // // `attFilteredAdv` ahora contiene los avisos filtrados por categoría y atributo
  // let filteredAdvertisings = attFilteredAdv;

  ///////////////////////////////////////////////////////





  ///////////////////////////////////////////////////////
  // Filtro en cadena por categoría, agrega al filtrado los avisos que pertenecen a la categoría filtrada, y por atributo agrega los avisos que cotienen todos los atributos seleccionados.

  // Primero filtramos por categorías
  let catFilteredAdv: any[] = [];

  if (allAdvertisings && selectedCategories.length > 0) {
    catFilteredAdv = allAdvertisings.filter((adv: any) => 
      selectedCategories.includes(adv.categoryCode)
    );
  } else {
    // Si no hay categorías seleccionadas, usar todos los avisos
    catFilteredAdv = allAdvertisings;
  }

  // Luego filtramos por atributos, pero esta vez verificamos que el aviso contenga todos los atributos seleccionados
  let attFilteredAdv: any[] = [];

  if (catFilteredAdv?.length > 0 && selectedAttributes.length > 0) {
    attFilteredAdv = catFilteredAdv.filter((adv: any) => 
      Array.isArray(adv.attributes) && 
      // Verificamos que todos los atributos seleccionados estén presentes en los atributos del aviso
      selectedAttributes.every((selectedAttr: number) => 
        adv.attributes.some((attr: any) => attr.id === selectedAttr)
      )
    );
  } else {
    // Si no hay atributos seleccionados, usar los avisos filtrados por categoría
    attFilteredAdv = catFilteredAdv;
  }

  // Filtramos por menor precio.
  let minPriceFilteredAdv: any[] = [];

  if (attFilteredAdv) {
    minPriceFilteredAdv = attFilteredAdv.filter((adv:any) => adv.price >= selectedMinPrice);
  }

  // Filtramos por mayor precio.
  let maxPriceFilteredAdv: any[] = [];

  if ( minPriceFilteredAdv && selectedMaxPrice === 0) {
    maxPriceFilteredAdv = minPriceFilteredAdv
  } else if ( minPriceFilteredAdv ) {
    maxPriceFilteredAdv = minPriceFilteredAdv.filter((adv:any) => adv.price <= selectedMaxPrice);
  }



  console.log('min: ', selectedMinPrice)
  console.log('max: ', selectedMaxPrice)
  
  // `attFilteredAdv` ahora contiene los avisos filtrados por categoría y por todos los atributos seleccionados
  let filteredAdvertisings = maxPriceFilteredAdv;




  // let catFilteredAdv: any[];
  // let attFilteredAdv: any[];
  // let filteredAdvertisings: any[];

  // if (allAdvertisings && selectAttributes.length > 0) {
  //   attFilteredAdv = catFilteredAdv.filter((adv: any) => 
  //     Array.isArray(adv.attributes) && adv.attributes.some((attr: any) => 
  //       selectAttributes.includes(attr.id) // Compara los `id` de los atributos con los seleccionados
  //     )
  //   );
  // } else {
  //   // Si no hay atributos seleccionados, mantener los avisos filtrados por categoría
  //   attFilteredAdv = [...catFilteredAdv];
  // }
  

  // if (allAdvertisings && selectedCategories.length === 0){
  //   // console.log('advertisings.length',advertisings.length)
  //   catFilteredAdv = allAdvertisings;
  // }else if(allAdvertisings && selectedCategories.length > 0) {
  //   catFilteredAdv = allAdvertisings.filter((adv:any) => 
  //   (
  //     selectedCategories.includes(adv.categoryCode)
  //   ))
  // }

  // if (allAdvertisings && selectedAttributes.length === 0){
  //   // console.log('advertisings.length',advertisings.length)
  //   attFilteredAdv = catFilteredAdv;
  // }else if(allAdvertisings && selectAttributes.length > 0) {
  //   attFilteredAdv = catFilteredAdv.filter((adv:any) => 
  //   (
  //     selectAttributes?.includes(adv.attributes.includes())
  //   ))
  // }
  // console.log('filteredAdvertisings: ', filteredAdvertisings);

  const cleanAllFiltersFunc = () => {
    dispatch(cleanAllFilters())
  }

  const toggleFiltersComp = () => {
    dispatch(toggleStyle())
  }

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

          <button onClick={cleanAllFiltersFunc}
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
