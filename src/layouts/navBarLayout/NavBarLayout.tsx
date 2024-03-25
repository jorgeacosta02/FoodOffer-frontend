import React from "react"
import NavBarLogoComp from "../../components/navBarLogoComp/NavBarLogoComp";
import NavBarNavListComp from "../../components/navBarNavListComp/NavBarNavListComp";
import NavBarMenuComp from "../../components/navBarMenuComp/NavBarMenuComp";
import styles from './_NavBarLayout.module.scss';


const NavBarLayout: React.FC = () => {

  return (
    <div className={styles.navBar}>
      <NavBarLogoComp/>
      <NavBarMenuComp/>
      <NavBarNavListComp/>
    </div>
  )
}

export default NavBarLayout

