import { Routes, Route } from 'react-router-dom';

// Pages
import ContactPage from './pages/contactPage/ContactPage';
import UserRegisterPage from './pages/userRegisterPage/UserRegisterPage';
import LoginPage from './pages/userLoginPage/UserLoginPage';
import UserProfilePage from './pages/userProfilePage/UserProfilePage';
import HomePage from './pages/homePage/HomePage';


// Components
import UserRoutesComp from './components/protectedRoutes/userRoutesComp/UserRoutesComp';


const App = () => {
  return (
    <div>
      <Routes>

        {/*Free Routes*/}
        <Route path="/" element={<HomePage />} />
        <Route path='/user-register' element={<UserRegisterPage/>}/>
        <Route path='/user-login' element={<LoginPage/>}/>
        <Route path="/contact" element={<ContactPage />} />

        {/* User Protected Routes*/}
       <Route element={<UserRoutesComp/>}>
        <Route path='/user-profile' element={<UserProfilePage/>}/>
       </Route>

       {/* Worker Protected  Routes */}
      </Routes>
    </div>
  )
}

export default App
