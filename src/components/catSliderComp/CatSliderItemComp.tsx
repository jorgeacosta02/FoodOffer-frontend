import styles from './_CatSliderComp.module.scss'


function CatSliderItemComp(category: any) {
    console.log('category: ', category)
    return (
      <div className={styles.item_box}>
          {/* <img
            src={`../../../src/assets/${category.category.icon}`}
            className={styles.item_icon}
          /> */}
          <p>
            {category.data.description}
          </p>
      </div>
    );
  }

export default CatSliderItemComp;
