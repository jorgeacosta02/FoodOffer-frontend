import { useState } from 'react';
import styles from './_OfferListComp.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faThLarge } from '@fortawesome/free-solid-svg-icons';
import OfferListItemComp from '../offerListItemComp/OfferListItemComp';
import OfferCardComp from '../offerCardComp/OfferCardComp';
import { Link } from 'react-router-dom';
import { toggleFavorites } from '../../../redux/slices/favoritesSlice';
import { useDispatch } from 'react-redux';

const OfferListComp = (props: any) => {
  console.log('props.data: ', props.data)
  const [viewList, setViewList] = useState(false);

  // Función para cambiar el valor de viewList
  const toggleViewList = () => {
    setViewList(prevState => !prevState); 
  };
  
  const [selectedOption, setSelectedOption] = useState('1');

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  const options = [
    { label: 'Menor precio', value: '1' },
    { label: 'Mayor precio', value: '2' },
  ];

  const linkClass = viewList ? 'link-card' : 'link-list';
  
  // console.log('selectedOption: ', selectedOption);
  // Hacer una copia de los datos y ordenarlos por precio de menor a mayor
  let sortedData = selectedOption === '2' ? 
  [...props.data].sort((a: any, b: any) => b.price - a.price) :
  [...props.data].sort((a: any, b: any) => a.price - b.price);

  const dispatch = useDispatch();

  const toggleFavoritesHandler = (id:string) => {
    console.log('id:', id)
    dispatch(toggleFavorites(id))
  }

  return (
    <div className={styles.container}>
      <div className={styles.filter_container}>
        <select value={selectedOption} className={styles.filter_option} onChange={handleSelectChange} >
          <option value="" disabled hidden>
            Ordenar por
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <FontAwesomeIcon icon={viewList ? faList : faThLarge} className={styles.view_icon} onClick={toggleViewList} />
      </div>
      {sortedData.map((item: any) =>
      <div key={item.id} className={styles[linkClass]}>
         <button
          onClick={() => toggleFavoritesHandler(item.id)}
        >
          Favorito
        </button>
        <Link 
          key={item.id} 
          // className={styles[linkClass]} 
          to={`/offerDetail/${item.id}`}
        >
          {!viewList ? (
            <OfferListItemComp data={item} />
          ) : (
            <OfferCardComp data={item} type={2} />
          )}
        </Link>
        </div>
      )}
    </div>
  );
}

export default OfferListComp;

