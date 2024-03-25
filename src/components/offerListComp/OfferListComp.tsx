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
  
  return (
       <div className={styles.container}>
        <div className={styles.filter_container}>
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