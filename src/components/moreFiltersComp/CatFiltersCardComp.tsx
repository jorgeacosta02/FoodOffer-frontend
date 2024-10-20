import styles from './_CatFiltersCardComp.module.scss'
import { useDispatch } from 'react-redux'
import { selectFilters, toggleCategory } from '../../redux/slices/fltersSlice';
import { useSelector } from 'react-redux';



const CatFiltersCardComp = (props:any) => {

  const dispatch = useDispatch();
  const filtersReducer = useSelector(selectFilters).categories;

  const addNewCatToFilterFunc = () => {
    dispatch(toggleCategory(props.data.code))
  }

  const includedInCategories = filtersReducer.includes(props.data.code);
  // console.log('includedInCategories: ', includedInCategories)
  const cardStyles = `${styles.main_container} ${includedInCategories ? styles.selected : ''}`;

  return (
    <div
      onClick={addNewCatToFilterFunc}
      className={cardStyles}
    >
      {
        <p>
          {props.data.description}
        </p>
      }
    </div>
  )
}

export default CatFiltersCardComp
