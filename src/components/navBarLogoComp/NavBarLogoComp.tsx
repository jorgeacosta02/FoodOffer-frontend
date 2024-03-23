import styles from './_NavBarLogoComp.module.scss';
import TriarLogo from '../../assets/Images/Logos&Brands/logo fondo transparente.png'

const LogoComp = () => {
  return (
    <div className={styles.container}>
      <img
        src={TriarLogo}
        alt="Exploservice Logo"
        className={styles.triarLogo}  
      />
    </div>
  )
}

export default LogoComp
