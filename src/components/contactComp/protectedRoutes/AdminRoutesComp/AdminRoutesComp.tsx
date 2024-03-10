import { Navigate, Outlet } from "react-router-dom";
import { getDataFromLocalStorage } from "../../localStorageComp/LocalStorageComp";


const AdminRoutesComp = () => {

  const userFLS = getDataFromLocalStorage('accessLogin');

  if (userFLS?.user?.role === 'admin' && userFLS?.user?.active) {
    console.log('dentro del if')
    return <Outlet/>;
  }
  console.log('fuera del if')
  return <Navigate to='/login' />
};

export default AdminRoutesComp