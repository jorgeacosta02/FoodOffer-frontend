import styles from './_CatFiltersCardComp.module.scss'
import { selectCategories, cleanCategories } from '../../redux/slices/categoriesSlice';
import { useSelector } from 'react-redux';


const CatFiltersCardComp = () => {

    const categoriesReducer = useSelector(selectCategories).data;

    console.log('categoriesReducer en Card:',categoriesReducer);

  return (
    <div
        className={styles.main_container}
    >
      {}
    </div>
  )
}

export default CatFiltersCardComp
