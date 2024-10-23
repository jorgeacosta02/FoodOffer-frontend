// import styles from './_PriceFiltersComp.module.scss';
// import { useDispatch } from 'react-redux';
// import { selectFilters } from '../../redux/slices/fltersSlice';
// import { useSelector } from 'react-redux';
// import { setMinPrice, setMaxPrice } from '../../redux/slices/fltersSlice';

// const PriceFiltersComp = () => {

//   const dispatch = useDispatch();
//   const minPriceReducer = useSelector(selectFilters).minPrice;
//   const maxPriceReducer = useSelector(selectFilters).maxPrice;

//   // Función para manejar el cambio del input de precio mínimo
//   const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newMinPrice = Number(event.target.value);
//     dispatch(setMinPrice(newMinPrice))
//   };

//   // Función para manejar el cambio del input de precio máximo
//   const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newMaxPrice = Number(event.target.value);
//     dispatch(setMaxPrice(newMaxPrice))
//   };

//   console.log('minPriceReducer: ', minPriceReducer)
//   console.log('maxPriceReducer: ', maxPriceReducer)

//   return (
//     <div className={styles.main_container}>
//       {/* Input para precio mínimo */}
//       <div className={styles.price_input_container}>
//         <label htmlFor="minPrice">Precio mínimo</label>
//         <input
//           type="number"
//           id="minPrice"
//           value={minPriceReducer} // Valor del precio mínimo
//           onChange={handleMinPriceChange} // Llamada a la función para actualizar el precio mínimo
//         />
//       </div>

//       {/* Input para precio máximo */}
//       <div className={styles.price_input_container}>
//         <label htmlFor="maxPrice">Precio máximo</label>
//         <input
//           type="number"
//           id="maxPrice"
//           value={maxPriceReducer} // Valor del precio máximo
//           onChange={handleMaxPriceChange} // Llamada a la función para actualizar el precio máximo
//         />
//       </div>
//     </div>
//   );
// };

// export default PriceFiltersComp;



import styles from './_PriceFiltersComp.module.scss';
import { useDispatch } from 'react-redux';
import { selectFilters, setMinPrice, setMaxPrice } from '../../redux/slices/fltersSlice';
import { useSelector } from 'react-redux';

const PriceFiltersComp = () => {
  const dispatch = useDispatch();
  const minPriceReducer = useSelector(selectFilters).minPrice;
  const maxPriceReducer = useSelector(selectFilters).maxPrice;

  // Función para manejar el cambio del input de precio mínimo
  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice: any = event.target.value === '' ? '' : Number(event.target.value);
    dispatch(setMinPrice(newMinPrice));
  };

  // Función para manejar el cambio del input de precio máximo
  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice: any = event.target.value === '' ? '' : Number(event.target.value);
    dispatch(setMaxPrice(newMaxPrice));
  };

  return (
    <div className={styles.main_container}>
      {/* Input para precio mínimo */}
      <div className={styles.price_input_container}>
        <label htmlFor="minPrice">Precio mínimo</label>
        <input
          type="number"
          id="minPrice"
          value={minPriceReducer !== undefined && minPriceReducer !== 0 ? minPriceReducer : ''} // Mostrar un string vacío si no hay valor
          onChange={handleMinPriceChange} // Llamada a la función para actualizar el precio mínimo
        />
      </div>

      {/* Input para precio máximo */}
      <div className={styles.price_input_container}>
        <label htmlFor="maxPrice">Precio máximo</label>
        <input
          type="number"
          id="maxPrice"
          value={maxPriceReducer !== undefined && maxPriceReducer !== 0 ? maxPriceReducer : ''} // Mostrar un string vacío si no hay valor
          onChange={handleMaxPriceChange} // Llamada a la función para actualizar el precio máximo
        />
      </div>
    </div>
  );
};

export default PriceFiltersComp;
