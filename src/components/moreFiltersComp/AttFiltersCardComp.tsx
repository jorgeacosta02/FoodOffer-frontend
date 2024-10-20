import styles from './_CatFiltersCardComp.module.scss'
import { useDispatch } from 'react-redux'
import { selectFilters, toggleAttributes } from '../../redux/slices/fltersSlice';
import { useSelector } from 'react-redux';



const AttFiltersCardComp = (props:any) => {

  const dispatch = useDispatch();
  const filtersReducer = useSelector(selectFilters).attributes;

  const addNewAttToFilterFunc = () => {
    dispatch(toggleAttributes(props.data.code))
  }

  const includedInAttributes = filtersReducer.includes(props.data.code);
  // console.log('includedInAttributes: ', includedInAttributes)
  const cardStyles = `${styles.main_container} ${includedInAttributes ? styles.selected : ''}`;

  return (
    <div
      onClick={addNewAttToFilterFunc}
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

export default AttFiltersCardComp
