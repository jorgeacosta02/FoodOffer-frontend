import { toggleCategory } from '../../redux/slices/fltersSlice';
import styles from './_MoreFiltersCardComp.module.scss'
import { useDispatch } from 'react-redux'
import { selectFilters } from '../../redux/slices/fltersSlice';
import { useSelector } from 'react-redux';



const CatFiltersCardComp = (props:any) => {

  const dispatch = useDispatch();
  const filtersReducer = useSelector(selectFilters);

  const addNewCatToFilterFunc = () => {
    dispatch(toggleCategory(props.data.code))
  }

  const includedInCategories = filtersReducer.categories.includes(props.data.code);
  console.log('includedInCategories: ', includedInCategories);
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
