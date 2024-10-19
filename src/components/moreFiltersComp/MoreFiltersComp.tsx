import styles from './_MoreFiltersComp.module.scss';
// import { selectMoreFiltersState, falseMoreFiltersState } from '../../redux/slices/moreFiltersStateSlice';
import { selectFilters, falseStyle } from '../../redux/slices/moreFiltersSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import CatFiltersCardComp from './CatFiltersCardComp';
import { 
  selectCategories, 
  // cleanCategories 
} from '../../redux/slices/categoriesSlice';




const MoreFiltersComp = () => {
    
  const dispatch = useDispatch();

  // const moreFiltersStateReducer: any = useSelector(selectMoreFiltersState).moreFiltersState;

  const filtersReducer: any = useSelector (selectFilters).style;

  const categories = useSelector(selectCategories).data;

  // console.log('categoriesReducer en Card:',categories);

  // const mainStyles = `${styles.main_container} ${moreFiltersStateReducer ? styles.show : ''}`;


  // console.log('catFiltersStateReducer: ', catFiltersStateReducer);

  const mainStyles2 = `${styles.main_container} ${filtersReducer ? styles.show : ''}`;

  // const falseFiltersStylesFunc = () => {
  //   dispatch(falseMoreFiltersState());
  // }

  const falseStylesFunc = () => {
    dispatch(falseStyle());
  }

  const addNewCatToFilterFunc = () => {
    
  }

  return (
    <div
        className={mainStyles2}
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
            onClick={falseStylesFunc}
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

export default MoreFiltersComp
