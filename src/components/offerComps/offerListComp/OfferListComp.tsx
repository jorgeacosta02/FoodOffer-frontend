import { useState } from 'react';
import styles from './_OfferListComp.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faThLarge } from '@fortawesome/free-solid-svg-icons';
import OfferListItemComp from '../offerListItemComp/OfferListItemComp';
import OfferCardComp from '../offerCardComp/OfferCardComp';
import { Link } from 'react-router-dom';

const OfferListComp = (props: any) => {
  // console.log('props.data: ', props.data)
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
        <Link 
          key={item.id} 
          className={styles[linkClass]} 
          to={`/offerDetail/${item.id}`}
        >
          {!viewList ? (
            <OfferListItemComp data={item} />
          ) : (
            <OfferCardComp data={item} type={2} />
          )}
        </Link>
      )}
    </div>
  );
}

export default OfferListComp;

