import styles from './_MoreFiltersComp.module.scss';
import { selectFilters, falseStyle } from '../../redux/slices/fltersSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectCategories } from '../../redux/slices/categoriesSlice';
import CatFiltersCarComp from './MoreFiltersCardComp';


const MoreFiltersComp = () => {
    
  const dispatch = useDispatch();

  const filtersReducer: any = useSelector (selectFilters).style;

  const categories = useSelector(selectCategories).data;
  
  console.log('categories: ',categories);

  const mainStyles = `${styles.main_container} ${filtersReducer ? styles.show : ''}`;

  const falseFiltersStylesFunc = () => {
    dispatch(falseStyle());
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
          className={styles.block}
        >
          <h5>
            Tipo de comida
          </h5>
          <div>
            {
              categories?.map((card:any) => {
                return (

                  <CatFiltersCarComp
                    key={card.code}
                    data={card}
                  />
              )})
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

export default MoreFiltersComp
