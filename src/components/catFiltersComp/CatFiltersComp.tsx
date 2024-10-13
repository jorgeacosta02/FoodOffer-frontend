import styles from './_CatFiltersComp.module.scss';
import { selectCatfiltersState } from '../../redux/slices/catFiltersStateSlice';
import { useSelector } from 'react-redux';



const CatFiltersComp = () => {
    
    
    const catFiltersStateReducer: any = useSelector(selectCatfiltersState).catFiltersState;

    const mainStyles = `${styles.main_container} ${catFiltersStateReducer ? styles.show : ''}`;

    console.log('catFiltersStateReducer: ', catFiltersStateReducer);

  return (
    <div
        className={mainStyles}
    >
      <p>
        Filtros
      </p>
      <div
          className={styles.button_container}
        >

          <button 
            // onClick={cleanCategoryCode}
            className={styles.all_button}
        >
            <p>
                Ver avisos filtrados
            </p>
          </button>
        </div>
    </div>
  )
}

export default CatFiltersComp
