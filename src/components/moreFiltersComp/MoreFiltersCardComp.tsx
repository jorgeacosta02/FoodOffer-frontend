import { toggleCategory } from '../../redux/slices/fltersSlice';
import styles from './_MoreFiltersCardComp.module.scss'
import { useDispatch } from 'react-redux'



const CatFiltersCardComp = (props:any) => {

  const dispatch = useDispatch();

  const addNewCatToFilterFunc = () => {
    dispatch(toggleCategory(props.data.code))
  }

  // console.log(props.data)

  return (
    <div
      onClick={addNewCatToFilterFunc}
      className={styles.main_container}
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
