import styles from './_CommerceRegisterComp.module.scss';
import { useState } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import MessageComp from '../messageComp/MessageComp';
import { IUserRegisterData } from '../../Interfaces/userInterfaces';
import { selectMessageState, toggleMessage } from '../../redux/slices/messageSlice';



const CommerceRegisterComp = () => {

   // Estados globales para opciones
  const messageState = useSelector(selectMessageState).message;
  const dispatch = useDispatch()
   
  // Estado de datos del formulario
  const [formData, setFormData] = useState<IUserRegisterData>({
    name: '',
    email: '',
    password: '',
    type: '',
    id_Type: 0,
    id_Number: '',
    phone: '',
    cell_Phone: '',
    // role:'',
    // active: false,
  });
 
   // Estado de errores del formulario
   const [errors, setErrors] = useState<IUserRegisterData>({
    name: '',
    email: '',
    password: '',
    type: '',
    id_Type: 0,
    id_Number: '',
    phone: '',
    cell_Phone: '',
    // role:'',
    // active: false,
   });
   
   // Comprobación de estados para enviar formulario
   let submitOk = false;
  
  if(
    formData.name  !== '' &&
    formData.email  !== '' &&
    formData.password  !== '' &&
    formData.type  !== '' &&
    formData.id_Type  !== 0 &&
    formData.id_Number !== '' &&
    formData.phone  !== '' &&
    formData.cell_Phone  !== ''
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
  

//     POST --> http://localhost:7141/user/register

// {
//     "Id_User": 0,
//     "Name": "Usuario test",
//     "Email": "test@gtest.com",
//     "Password": "1234",
//     "Type": "C",
//     "Id_Type": 1,
//     "Id_Number": "11333555"
// }

// Type "C" es por customer. Por ahora solo tenemos customers. 
// Id_type es codigo de tipo de documento. Lo puse como 1 por ahora.
// Id_number seria el numero de documento, dni, cuit, el que corresponda al tipo


   }
 
   const emptyMessage = 'Este campo debe ser completado.';
 
   const emptyValidationHandler =()=>{
     if(!formData.name){
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
    //  if(!formData.phone){
    //    setErrors((prevData) => ({
    //      ...prevData,
    //      lastName: emptyMessage,
    //    }));
    //  };
    //  if(!formData.cellPhone){
    //    setErrors((prevData) => ({
    //      ...prevData,
    //      dni: emptyMessage,
    //    }));
    //  };
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
         'user/register',
          formData
       );
       console.log('response', response.status);
       // queryResponse = await response.status;
       setFormData({
        name: '',
        email: '',
        password: '',
        type: '',
        id_Type: 0,
        id_Number: '',
        phone: '',
        cell_Phone: '',
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
            Registro de usuario
          </h1>
          <div className={styles.inputBlock}>
            <label 
              htmlFor='name'>
              Nombre del negocio
            </label>
            <input
              type='text'
              id='name'
              name='name' 
              value={formData.name}
              onChange={handleInputChange} 
              placeholder='Ingrese nombre del negocio...'
            />
            {
              errors.name 
              && 
              <p className={styles.errorMessage}>
                {errors.name}
              </p>
            }
          </div>
          <div className={styles.inputBlock}>
            <label 
              htmlFor='email'>
              Email
            </label>
            <input
              type='text'
              id='email'
              name='email' 
              value={formData.email}
              onChange={handleInputChange} 
              placeholder='Ingrese email...'
            />
            {
              errors.email 
              && 
              <p className={styles.errorMessage}>
                {errors.email}
              </p>
            }
          </div>
          <div className={styles.inputBlock}>
            <label 
              htmlFor='password'>
              Contraseña
            </label>
            <input
              type='text'
              id='password'
              name='password' 
              value={formData.password}
              onChange={handleInputChange} 
              placeholder='Ingrese contraseña...'
            />
            {
              errors.password 
              && 
              <p className={styles.errorMessage}>
                {errors.password}
              </p>
            }
          </div>
          <div className={styles.inputBlock}>
            <label 
              htmlFor='type'>
              Tipo de registro
            </label>
            <input
              type='text'
              id='type'
              name='type' 
              value={formData.type}
              onChange={handleInputChange} 
              placeholder='Ingrese tipo de registro...'
            />
            {
              errors.type 
              && 
              <p className={styles.errorMessage}>
                {errors.type}
              </p>
            }
          </div>
          <div className={styles.inputBlock}>
            <label 
              htmlFor='id_Type'>
              Tipo de documento
            </label>
            <input
              type='number'
              id='id_Type'
              name='id_Type' 
              value={formData.id_Type}
              onChange={handleInputChange} 
              placeholder='Ingrese tipo de documento...'
            />
            {
              errors.id_Type 
              && 
              <p className={styles.errorMessage}>
                {errors.id_Type}
              </p>
            }
          </div>
          <div className={styles.inputBlock}>
            <label 
              htmlFor='id_Number'>
              Número de documento
            </label>
            <input
              type='text'
              id='id_Number'
              name='id_Number' 
              value={formData.id_Number}
              onChange={handleInputChange} 
              placeholder='Ingrese número de documento...'
            />
            {
              errors.id_Number 
              && 
              <p className={styles.errorMessage}>
                {errors.id_Number}
              </p>
            }
          </div>
          <div className={styles.inputBlock}>
            <label 
              htmlFor='phone'>
              Teléfono fijo
            </label>
            <input
              type='text'
              id='phone'
              name='phone' 
              value={formData.phone}
              onChange={handleInputChange} 
              placeholder='Ingrese número de teléfono fijo...'
            />
            {
              errors.phone 
              && 
              <p className={styles.errorMessage}>
                {errors.phone}
              </p>
            }
          </div>
          <div className={styles.inputBlock}>
            <label 
              htmlFor='cellPhone'>
              Teléfono celular
            </label>
            <input
              type='text'
              id='cell_Phone'
              name='cell_Phone' 
              value={formData.cell_Phone}
              onChange={handleInputChange} 
              placeholder='Ingrese número de teléfono celular...'
            />
            {
              errors.cell_Phone 
              && 
              <p className={styles.errorMessage}>
                {errors.cell_Phone}
              </p>
            }
          </div>
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

export default CommerceRegisterComp

