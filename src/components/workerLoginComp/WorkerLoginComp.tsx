import styles from './_WorkerLoginComp.module.scss'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { workerLoginSchema } from '../../validations/zodWorkerSchemas';
// import { Link } from 'react-router-dom';
import { IWorkerLoginData } from '../../Interfaces/workerInterfaces';
import { useDispatch, useSelector } from 'react-redux';
import { selectWorkerAuth } from '../../redux/slices/workerAuthSlice';
import { loginWorker } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';


const WorkerLoginComp = () => {

  const workerAuth = useSelector(selectWorkerAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IWorkerLoginData>({
    resolver: zodResolver(workerLoginSchema)
  })

  const onSubmit = async (data:IWorkerLoginData) => {
    console.log('data en onSubmit ', data)
    await dispatch(loginWorker(data));
    reset();
  };
  
  console.log('workerAuth en WorkerLoginComp:  ',workerAuth);
  
  console.log('document.cookie', document);

  const workerAuthCompleteReducer = useSelector((state: any) => state.workerAuth.data);
  console.log('workerAuthCompleteReducer state.workerAuth.data in WorkerLoginAction :',workerAuthCompleteReducer);

  console.log('workerAuth en on Submit: ', workerAuth)
  if(workerAuth?.data?.role === 'prof'){
    console.log('por ir a /worker-profile')
    navigate('/worker-profile')
  }
 
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className={styles.title}>
            Ingresar
          </h2>
          <div className={styles.inputBlock}>
            <label htmlFor='dni'>Dni</label>
            <input type='text' {...register(
              'dni',
              { required: 'El dni es requerido' })}
              placeholder='Ingrese dni...'
            />
            {errors.dni && <span>{errors.dni.message}</span>}
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor='password'>Contraseña</label>
            <input type='password' {...register(
              'password',
              { required: 'La contraseña es requerida' })}
              placeholder='Ingrese contraseña...'
            />
          {errors.password && <span>{errors.password.message}</span>}
          </div>
          <button
            className={styles.submit}
            type='submit'
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}

export default WorkerLoginComp
