// import styles from './_BackButtonComp.module.scss';
// import { NavLink } from 'react-router-dom';


// const BackButtonComp = () => {
//   return (
//     <div>
//       <NavLink
//             to='/elbosque'
//             className={styles.back}
//       >
//         Volver
//       </NavLink>
//     </div>
//   )
// }

// export default BackButtonComp



import { useState, useEffect } from 'react';
import styles from './_BackButtonComp.module.scss';

const BackButtonComp = () => {
  const [showButton, setShowButton] = useState(false);

  // Manejar el scroll para mostrar u ocultar el botón
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {  // Mostrar botón cuando se baja 200px
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Limpiar el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para volver al inicio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Efecto de desplazamiento suave
    });
  };

  return (
    <div>
      {showButton && (
        <button onClick={scrollToTop} className={styles.back}>
          <p>
            Volver al inicio
          </p>
        </button>
      )}
    </div>
  );
};

export default BackButtonComp;
