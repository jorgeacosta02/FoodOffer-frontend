import React from 'react';
import { useDispatch } from 'react-redux';
import { addCategoryCode } from '../../redux/slices/categoriesCodeSlice'; // Importa la acción
import styles from './_CatSliderItemComp.module.scss';

function CatSliderItemComp(props: any) {
  const dispatch = useDispatch();

  const setCatCodeFunction = () => {
    console.log('category code: ', props.category.code);
    dispatch(addCategoryCode(props.category.code)); // Despacha la acción para agregar el código
  };

  return (
    <div 
      className={styles.item_box}
      onClick={setCatCodeFunction}
    >
        {/* <img
          src={`../../../src/assets/${props.category.icon}`}
          className={styles.item_icon}
        /> */}
        <p>
          {props.category.description}
        </p>
    </div>
  );
}

export default CatSliderItemComp;
