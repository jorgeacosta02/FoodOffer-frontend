import { useEffect, useState } from 'react';
import {
  nameCorrectValidation,
  nameExistsValidation,
  emailCorrectValidation,
  emailExistsValidation,
  subjectExistsValidation,
  messageExistsValidation
} from './contactValidation';

import axios from 'axios';
import toast from 'react-hot-toast';
import styles from './_ContactFormComp.module.scss';


export interface FormDataShape {
  name: string,
  email: string,
  subject: string,
  message: string
}

const ContactFormComp: React.FC = () => {

  const [formData, setFormData] = useState<FormDataShape>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormDataShape>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  let submitOk = false;

  if(
    formData.name !== '' &&
    formData.email !== '' &&
    formData.subject !== '' &&
    formData.message !== '' &&
    errors.name === '' &&
    errors.email === '' &&
    errors.subject === '' &&
    errors.message === '' 
  ){
    submitOk = true;
  };
  
  console.log('submitOK: ', submitOk);

  useEffect(() => {
    nameCorrectValidation(formData, setErrors);
  },[formData.name])
 
  useEffect(() => {
    emailCorrectValidation(formData, setErrors);
  },[formData.email])

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
    console.log(name, value);
    console.log(formData, errors);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      if(!submitOk){
        console.log('if en handleSubmit')
        nameExistsValidation(formData, setErrors);
        emailExistsValidation(formData, setErrors);
        subjectExistsValidation(formData, setErrors);
        return messageExistsValidation(formData, setErrors);
      }
        await axios.post('exploservice/contact', formData)
        toast.success('Mensaje enviado exitosamente!!')
        setTimeout(() => {
          window.location.href = '/exploservice/company';
        }, 2000);
    } catch (error: any) {

    if (error?.response?.data?.message) {
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else {
      toast.error('Error al enviar el mensaje.');
      }
    }
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Envianos un mensaje</h2>
        <div>
          <div className={styles.inputBlock}>
            <label htmlFor='name'>Nombre:  </label>
            <input
              type='text'
              id='name'
              name='name' 
              placeholder='Ingresa nombre'
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <p className={styles.errMessage}>{errors.name}</p>
          <div className={styles.inputBlock}>
            <label htmlFor='email'>Email:  </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Ingresa email'
              value={formData.email}
              onChange={handleInputChange}
              />
          </div>
          <p className={styles.errMessage}>{errors.email}</p>
          <div className={styles.inputBlock}>
            <label htmlFor='subject'>Asunto:  </label>
            <input
              type="text"
              id='subject'
              name='subject'
              placeholder='Ingresa asunto'
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>
          <p className={styles.errMessage}>{errors.subject}</p>
          <div className={styles.textareaBlock}>
            <label htmlFor="message">Mensaje:  </label>
            <textarea
              id='message'
              name='message'
              placeholder='Ingresa tu mensaje aquí...'
              value={formData.message}
              onChange={handleInputChange}
            >
            </textarea>
          </div>
          <p className={styles.errMessage}>{errors.message}</p>
        </div>
        <div className={styles.submitBox}>
          <button
            type='submit'
            className={styles.submit}
          >
           Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactFormComp
