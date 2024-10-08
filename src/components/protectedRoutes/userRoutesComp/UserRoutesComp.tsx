import { 
  // Navigate, 
  Outlet 
} from "react-router-dom";
import { getDataFromLocalStorage } from "../../localStorageComp/LocalStorageComp";


const UserRoutesComp = () => {

  const accessLogin = getDataFromLocalStorage('accessLogin');

  console.log('accessLogin: ', accessLogin)

  if ( accessLogin.type === "C" ) {
    console.log('dentro del if')
    return <Outlet/>;
  }
  // console.log('fuera del if')
  // return <Navigate to='/user-login' />
};

export default UserRoutesComp