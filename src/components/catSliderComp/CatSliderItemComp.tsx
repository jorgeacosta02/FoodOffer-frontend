import styles from './_CatSliderComp.module.scss'

console.log('CatSliderItemcomp')
function CatSliderItemComp(props: any) {

    // console.log('category: ', category)
    return (
      <div className={styles.item_box}>
          {/* <img
            src={`../../../src/assets/${category.category.icon}`}
            className={styles.item_icon}
          /> */}
          <p>
            {props.category.description}
          </p>
      </div>
    );
  }

export default CatSliderItemComp;
