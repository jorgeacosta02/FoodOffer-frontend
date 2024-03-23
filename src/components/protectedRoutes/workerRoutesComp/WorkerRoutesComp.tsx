import { Navigate, Outlet } from "react-router-dom";
import { getDataFromLocalStorage } from "../../localStorageComp/LocalStorageComp";


const WorkerRoutesComp = () => {

  const accessLogin = getDataFromLocalStorage('accessLogin');

  console.log(accessLogin)

  if ( accessLogin.worker.active && accessLogin?.worker?.role === 'prof' ) {
    console.log('dentro del if')
    return <Outlet/>;
  }
  console.log('fuera del if')
  alert('No tiene permiso para ingresar a esta ruta.')
  return <Navigate to='/' />
};

export default WorkerRoutesComp