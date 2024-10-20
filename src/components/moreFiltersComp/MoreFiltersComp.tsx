import styles from './_MoreFiltersComp.module.scss';
import { selectFilters, falseStyle } from '../../redux/slices/fltersSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectCategories } from '../../redux/slices/categoriesSlice';
import CatFiltersCardComp from './CatFiltersCardComp';
import AttFiltersCardComp from './AttFiltersCardComp';


const MoreFiltersComp = () => {
    
  const dispatch = useDispatch();

  const filtersStylesReducer: any = useSelector (selectFilters).style;

  const categories = useSelector(selectCategories).data;
  
  // console.log('categories: ', categories);

  const mainStyles = `${styles.main_container} ${filtersStylesReducer ? styles.show : ''}`;

  const falseFiltersStylesFunc = () => {
    dispatch(falseStyle());
  }

  const attributes = [
    {
      id: 1,
      code: 1,
      description: "Vegano"
    },
    {
      id: 2,
      code: 2,
      description: "Vegetariano"
    },
    {
      id: 3,
      code: 3,
      description: "Sin Gluten"
    },
  ]


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
                  <CatFiltersCardComp
                    key={card.code}
                    data={card}
                  />
              )})
            }
          </div>
        </div>
        <div
          className={styles.block}
        >
          <h5>
            Atributos
          </h5>
          <div>
            {
              attributes?.map((card:any) => {
                return (
                  <AttFiltersCardComp
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
