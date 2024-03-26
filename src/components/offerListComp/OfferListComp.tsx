import { useState } from 'react';
import styles from './_OfferListComp.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faThLarge } from '@fortawesome/free-solid-svg-icons';
import OfferListItemComp from '../offerListItemComp/OfferListItemComp';

import OfferCardComp from '../offerCardComp/OfferCardComp';


const OfferListComp = (data: any) => {
  const [viewList, setViewList] = useState(false);

  // Función para cambiar el valor de viewList
  const toggleViewList = () => {
    setViewList(prevState => !prevState); // Cambia el valor de viewList a su valor opuesto
  };
  
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  const options = [
    { label: 'Menor precio', value: '1' },
    { label: 'Mayo precio', value: '2' },
  ];

  return (
       <div className={styles.container}>
        <div className={styles.filter_container}>
        <select value={selectedOption} onChange={handleSelectChange}>
      <option value="" disabled>
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
                    
          {data.data.map((item: any) =>
                !viewList ? (
                  <OfferListItemComp data={item} key={item.id} />
                ) : (
                  <OfferCardComp data={item} type={2} key={item.id} />
                )
              )}
        </div>
  );
}

export default OfferListComp;