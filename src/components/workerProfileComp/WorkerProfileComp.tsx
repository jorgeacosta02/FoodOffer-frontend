import styles from './_WorkerProfileComp.module.scss'
import { getDataFromLocalStorage, cleanDataInLocalStorage } from '../localStorageComp/LocalStorageComp'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cleanWorker } from '../../redux/slices/workerAuthSlice';


const WorkerProfileComp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const worker = getDataFromLocalStorage('accessLogin').worker;

    const clickHandler = () => {
        cleanDataInLocalStorage('accessLogin');
        dispatch(cleanWorker());
        navigate('/');
    }

    const goBackHandler = () => {
        navigate('/')
    }

    return (
        <div className={styles.container}>
            <div className={styles.dataContainer}>
                <h1 className={styles.title}>Mi perfil</h1>
                <div className={styles.data}>
                    <p>{`Nombre: ${worker.firstName.toUpperCase()}`}</p>
                    <p>{`Apellido: ${worker.lastName.toUpperCase()}`}</p>
                    <p>{`Dni: ${worker.dni ? worker.dni : 'sin número'}`}</p>
                    <p>{`Teléfono: ${worker.phone}`}</p>
                    <p>{`Email: ${worker.email}`}</p>
                </div>
                <div className={styles.buttons}>

                <button
                    onClick={clickHandler}
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

export default WorkerProfileComp
