import styles from './_CatSliderComp.module.scss'


function CatSliderItemComp(category: any) {
  
    return (
      <div className={styles.item_box}>
          <img src={`../../../src/assets/${category.category.icon}`} className={styles.item_icon} />
      </div>
    );
  }

export default CatSliderItemComp;
