import React from "react"
import NavBarLogoComp from "../../components/navBarLogoComp/NavBarLogoComp";
import NavBarNavListComp from "../../components/navBarNavListComp/NavBarNavListComp";
import NavBarMenuComp from "../../components/navBarMenuComp/navBarMenuComp";
import styles from './_navBarLayout.module.scss';


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

