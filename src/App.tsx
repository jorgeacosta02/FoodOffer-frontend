import { Routes, Route } from 'react-router-dom';

// Pages
import ContactPage from './pages/contactPage/ContactPage';
import UserRegisterPage from './pages/userRegisterPage/UserRegisterPage';
import LoginPage from './pages/userLoginPage/UserLoginPage';
import UserProfilePage from './pages/userProfilePage/UserProfilePage';
import HomePage from './pages/homePage/HomePage';


// Components
import UserRoutesComp from './components/protectedRoutes/userRoutesComp/UserRoutesComp';
import OfferDetailPage from './pages/offerDetailPage/OfferDetailPage';
import NavBarLayout from './layouts/navBarLayout/NavBarLayout';
import FooterComp from './components/footerComp/FooterComp';


const App = () => {

  const containerStyle = {
    marginTop: '75px', 
    marginBottom: '30px',      
  };

  return (
    <div>
      <NavBarLayout />
      <div style={containerStyle}>
      <Routes>

        {/*Free Routes*/}
        <Route path="/" element={<HomePage />} />
        <Route path='/user-register' element={<UserRegisterPage/>}/>
        <Route path='/user-login' element={<LoginPage/>}/>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/offerDetail/:offerId" element={<OfferDetailPage />} />
        {/* User Protected Routes*/}
       <Route element={<UserRoutesComp/>}>
        <Route path='/user-profile' element={<UserProfilePage/>}/>
       </Route>

       {/* Worker Protected  Routes */}

      </Routes>
      </div>
      <FooterComp></FooterComp>
    </div>
  )
}

export default App
