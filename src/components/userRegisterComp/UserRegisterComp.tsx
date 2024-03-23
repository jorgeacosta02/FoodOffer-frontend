import styles from './_UserRegisterComp.module.scss';
import { useState } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import MessageComp from '../messageComp/MessageComp';
import { IUserRegisterData } from '../../Interfaces/userInterfaces';
import { selectMessageState, toggleMessage } from '../../redux/slices/messageSlice';



const UserRegisterComp = () => {

   // Estados globales para opciones
  const messageState = useSelector(selectMessageState).message;
  const dispatch = useDispatch()
   
  // Estado de datos del formulario
  const [formData, setFormData] = useState<IUserRegisterData>({
    firstName: '',
    lastName: '',
    dni: '',
    // birthDate:'',
    phone: '',
    email: '',
    password: '',
    // role:'',
    // active: false,
  });
 
   // Estado de errores del formulario
   const [errors, setErrors] = useState<IUserRegisterData>({
    firstName: '',
    lastName: '',
    dni: '',
    // birthDate:'',
    phone: '',
    email: '',
    password: '',
    // role:'',
    // active: false,
   });
   
   // Comprobación de estados para enviar formulario
   let submitOk = false;
  
  if(
    formData.firstName  !== '' &&
    formData.lastName  !== '' &&
    formData.dni  !== '' &&
    // formData.birthDate !== '' &&
    formData.phone  !== '' &&
    formData.email  !== '' &&
    formData.password  !== ''
    // formData.role !== '' 
    // formData.active !== false
  ){
    submitOk = true;
  };
   
  // Expresiones de validación
  //  const nameRegExp = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]*$/;
  //  const emailRegExp = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
 
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     const { name, value } = e.target;
     setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevData) => ({
      ...prevData,
      [name]: '',
    }));
     // Valida solo letras
    //  if (name === 'name'){
    //    if(!nameRegExp.test(value)){
    //      setErrors((prevData) => ({
    //        ...prevData,
    //        [name]: langState === 'es' ? 'El nombre debe contener solo letras.' : 'The name must contain only letters.',
    //      }));
    //    }else{
    //      setFormData((prevData) => ({
    //        ...prevData,
    //        [name]: value,
    //      }));
    //      setErrors((prevData) => ({
    //        ...prevData,
    //        [name]: '',
    //      }));
    //    }
    //  }
 
     // Valida campo email
    //  if (name === 'email'){
    //    if(!emailRegExp.test(value)){
    //      setErrors((prevData) => ({
    //        ...prevData,
    //        [name]: langState === 'es' ? 'Debe ingresar un mail válido.': 'You must enter  a valid email.',
    //      }));
    //      setFormData((prevData) => ({
    //        ...prevData,
    //        [name]: value,
    //      }));
    //    }else{
    //      setFormData((prevData) => ({
    //        ...prevData,
    //        [name]: value,
    //      }));
    //      setErrors((prevData) => ({
    //        ...prevData,
    //        [name]: '',
    //      }));
    //    }
    //  }
    //  if (name === 'subject' || name === 'message'){
    //     setFormData((prevData) => ({
    //      ...prevData,
    //      [name]: value,
    //    }));
    //    setErrors((prevData) => ({
    //      ...prevData,
    //      [name]: '',
    //    }));
    //  }
    //  console.log('name y value in handleInputChange: ',name, value);
    //  console.log('formData y errors in handleInputChange: ',formData, errors);
   }
 
   const emptyMessage = 'Este campo debe ser completado.';
 
   const emptyValidationHandler =()=>{
     if(!formData.firstName){
       setErrors((prevData) => ({
         ...prevData,
         firstName: emptyMessage,
       }));
     };
     if(!formData.email){
       setErrors((prevData) => ({
         ...prevData,
         email: emptyMessage,
       }));
     };
     if(!formData.lastName){
       setErrors((prevData) => ({
         ...prevData,
         lastName: emptyMessage,
       }));
     };
     if(!formData.dni){
       setErrors((prevData) => ({
         ...prevData,
         dni: emptyMessage,
       }));
     };
    //  if(!formData.birthDate){
    //    setErrors((prevData) => ({
    //      ...prevData,
    //      birthDate: emptyMessage,
    //    }));
    //  };
     if(!formData.phone){
       setErrors((prevData) => ({
         ...prevData,
         phone: emptyMessage,
       }));
     };
     if(!formData.email){
       setErrors((prevData) => ({
         ...prevData,
         email: emptyMessage,
       }));
     };
     if(!formData.password){
       setErrors((prevData) => ({
         ...prevData,
         password: emptyMessage,
       }));
     };
    //  if(!formData.role){
    //    setErrors((prevData) => ({
    //      ...prevData,
    //      role: emptyMessage,
    //    }));
    //  };
   };
   
   
   const handleSubmit = (event:any) => {
     event.preventDefault();
     console.log('submit')
     if(!submitOk) return emptyValidationHandler();
     submitForm();
   }
   
   const messageHandleClick = () => {
     dispatch( toggleMessage() );
   };
 
   const submitForm = async () => {
     try{
       const response = await axios.post(
         'http://localhost:5000/register',
          formData
       );
       console.log('response', response.status);
       // queryResponse = await response.status;
       setFormData({
        firstName: '',
        lastName: '',
        dni: '',
        // birthDate:'',
        phone: '',
        email: '',
        password: '',
        // role:'',
        // active: false,
       })
 
       messageHandleClick()

     }catch(error:any){
       console.log(error.message)
     }
   }

  
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form
          onSubmit={handleSubmit}
        >
          <h1 className={styles.title}>
            Registrar personal
          </h1>
          <div className={styles.inputBlock}>
              <label 
                htmlFor='firstName'>
                Nombre
              </label>
              <input
                type='text'
                id='firtsName'
                name='firstName' 
                value={formData.firstName}
                onChange={handleInputChange} 
                placeholder='Ingrese nombre...'
              />
              {
                errors.firstName 
                && 
                <p className={styles.errorMessage}>
                  {errors.firstName}
                </p>
              }
            </div>
          <div className={styles.inputBlock}>
              <label 
                htmlFor='lastName'>
                Apellido
              </label>
              <input
                type='text'
                id='lastName'
                name='lastName' 
                value={formData.lastName}
                onChange={handleInputChange} 
                placeholder='Ingrese apellido...'
              />
              {
                errors.lastName 
                && 
                <p className={styles.errorMessage}>
                  {errors.lastName}
                </p>
              }
            </div>
          {/* <div className={styles.inputBlock}>
              <label 
                htmlFor='dni'>
                {langState === 'es' ? 'DNI' : 'DNI'}
              </label>
              <input
                type='text'
                id='dni'
                name='dni' 
                value={formData.dni}
                onChange={handleInputChange} 
                placeholder={langState === 'es' ? 'Ingrese dni...' :  'Enter dni...'}
                // className={inputColor}
              />
              {
                errors.dni 
                && 
                <p className={styles.errorMessage}>
                  {errors.dni}
                </p>
              }
            </div> */}
          {/* <div className={styles.inputBlock}>
              <label 
                htmlFor='birthDate'>
                {langState === 'es' ? 'Fecha de nacimiento' : 'Birthdate'}
              </label>
              <input
                type='text'
                id='birthDate'
                name='birthDate' 
                value={formData.birthDate}
                onChange={handleInputChange} 
                placeholder={langState === 'es' ? 'Ingrese fecha de nacimiento...' :  'Enter birthdate...'}
                // className={inputColor}
              />
              {
                errors.birthDate 
                && 
                <p className={styles.errorMessage}>
                  {errors.birthDate}
                </p>
              }
            </div> */}
          {/* <div className={styles.inputBlock}>
              <label 
                htmlFor='phone'>
                {langState === 'es' ? 'Teléfono' : 'Phone'}
              </label>
              <input
                type='text'
                id='phone'
                name='phone' 
                value={formData.phone}
                onChange={handleInputChange} 
                placeholder={langState === 'es' ? 'Ingrese número de teléfono...' :  'Enter phone number...'}
                // className={inputColor}
              />
              {
                errors.phone 
                && 
                <p className={styles.errorMessage}>
                  {errors.phone}
                </p>
              }
            </div> */}
          {/* <div className={styles.inputBlock}>
              <label 
                htmlFor='email'>
                {langState === 'es' ? 'Correo electrónico' : 'Email'}
              </label>
              <input
                type='text'
                id='email'
                name='email' 
                value={formData.email}
                onChange={handleInputChange} 
                placeholder={langState === 'es' ? 'Ingrese correo electrónico...' :  'Enter email...'}
                // className={inputColor}
              />
              {
                errors.email 
                && 
                <p className={styles.errorMessage}>
                  {errors.email}
                </p>
              }
            </div> */}
          {/* <div className={styles.inputBlock}>
            <label 
              htmlFor='password'>
              {langState === 'es' ? 'Contraseña' : 'Password'}
            </label>
            <input
              type='text'
              id='password'
              name='password' 
              value={formData.password}
              onChange={handleInputChange} 
              placeholder={langState === 'es' ? 'Ingrese contraseña...' :  'Enter password...'}
              // className={inputColor}
            />
            {
              errors.password 
              && 
              <p className={styles.errorMessage}>
                {errors.password}
              </p>
            }
          </div> */}
          <button
            className={styles.submit}
            type='submit'
          >
            Enviar formulario
          </button>
        </form>
      </div>
      { messageState && 
      <MessageComp
        data={ 'Mensaje enviado exitosamente'
              }
      />}
    </div>
  )
}

export default UserRegisterComp

