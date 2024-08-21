import styles from './_UserProfileComp.module.scss'
import { getDataFromLocalStorage, cleanDataInLocalStorage } from '../localStorageComp/LocalStorageComp'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cleanUser } from '../../redux/slices/userAuthSlice'

const UserProfileComp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = getDataFromLocalStorage('accessLogin');

    const signOutHandler = () => {
        cleanDataInLocalStorage('accessLogin');
        dispatch(cleanUser());
        navigate('/');
    }

    const goBackHandler = () => {
        navigate(-1)
    }

    return (
        <div className={styles.container}>
            <div className={styles.dataContainer}>
                <h1 className={styles.title}>Mi perfil</h1>
                <div className={styles.data}>
                    <p>{`Nombre del negocio: ${user.name.toUpperCase()}`}</p>
                    {/* <p>{`Logo: ${user.firstName.toUpperCase()}`}</p> */}
                    {/* <p>{`Descripción del negocio: ${user.lastName.toUpperCase()}`}</p> */}
                    {/* <p>{`Domicilio: ${user.dni ? user.dni : 'sin número'}`}</p>
                    <p>{`Teléfono: ${user.phone}`}</p> */}
                    <p>{`Email: ${user.email}`}</p>
                    {/* <p>{`Nombre del titular: ${user.email}`}</p> */}
                </div>
                <div className={styles.linksContainer}>
                    <Link to="#">
                        Crear publicación
                    </Link>
                    <Link to="#">
                        Modificar mis datos
                    </Link>
                </div>
                <div className={styles.buttons}>
                    <button
                        onClick={signOutHandler}
                        className={styles.button}
                    >
                        Cerrar sesión
                    </button>
                    <button
                        onClick={goBackHandler}
                        className={styles.button}
                    >
                        Volver
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserProfileComp
