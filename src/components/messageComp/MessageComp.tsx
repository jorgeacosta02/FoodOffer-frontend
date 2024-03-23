import styles from './_MessageComp.module.scss'
import { useDispatch } from 'react-redux'
import { toggleMessage } from '../../redux/slices/messageSlice'



const MessageComp = (props:any) => {


    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch( toggleMessage() );
      };

    const message = props.data;

    return (
        <div className={styles.container}>
            <div className={styles.dataContainer}>
                <p className={styles.text}>
                    {message}
                </p>
                <button
                    className={styles.accept}
                    onClick={handleClick}
                >
                    Aceptar
                </button>
            </div>
        </div>
    )
}

export default MessageComp
