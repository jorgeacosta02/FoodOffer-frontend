import styles from './_MoreFiltersCardComp.module.scss'
import { selectCategories } from '../../redux/slices/categoriesSlice';
import { useSelector } from 'react-redux';


const CatFiltersCardComp = () => {

    const categoriesReducer = useSelector(selectCategories).data;

    console.log('categoriesReducer en MoreFiltersCardComp:',categoriesReducer);

  return (
    <div
        className={styles.main_container}
    >
      {}
    </div>
  )
}

export default CatFiltersCardComp
