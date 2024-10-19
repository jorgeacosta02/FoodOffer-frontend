import { useDispatch } from 'react-redux';
// import { addCategoryCode } from '../../redux/slices/categoryCodesSlice'; // Importa la acción
import { oneCategory } from '../../redux/slices/fltersSlice';
import styles from './_CatSliderItemComp.module.scss';

function CatSliderItemComp(props: any) {
  const dispatch = useDispatch();

  // const setCatCodeFunction = () => {
  //   console.log('category code: ', props.category.code);
  //   dispatch(addCategoryCode(props.category.code)); // Despacha la acción para agregar el código
  // };

  const oneCatCodeFunc = () => {
    console.log('category code: ', props.category.code);
    dispatch(oneCategory(props.category.code));
  }

  return (
    <div 
      className={styles.item_box}
      onClick={oneCatCodeFunc}
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
