import styles from './_CatFiltersComp.module.scss';
import { selectCatfiltersState, falseCatFiltersState } from '../../redux/slices/catFiltersStateSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import CatFiltersCardComp from './CatFiltersCardComp';
import { 
  selectCategories, 
  // cleanCategories 
} from '../../redux/slices/categoriesSlice';




const CatFiltersComp = () => {
    
  const dispatch = useDispatch();

  const catFiltersStateReducer: any = useSelector(selectCatfiltersState).catFiltersState;

  const categories = useSelector(selectCategories).data;

  // console.log('categoriesReducer en Card:',categories);

  const mainStyles = `${styles.main_container} ${catFiltersStateReducer ? styles.show : ''}`;
  // console.log('catFiltersStateReducer: ', catFiltersStateReducer);

  const falseFiltersStylesFunc = () => {
    dispatch(falseCatFiltersState());
  }

  const addNewCatToFilterFunc = () => {
    
  }

  return (
    <div
        className={mainStyles}
    >
      <h4>
        Filtros
      </h4>
      <div>
        <div
          className={styles.type}
        >
          <h5>
            Tipo de comida
          </h5>
          <div>
            {
              categories?.map((card) => {
                <div
                  onClick={addNewCatToFilterFunc}
                  key={card.code}
                >
                  <p>
                    {card.description}
                  </p>
                </div>
              }
              )
            }
          </div>
        </div>
      </div>
      <div
          className={styles.button_container}
        >

          <button 
            onClick={falseFiltersStylesFunc}
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
