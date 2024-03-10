import { Routes, Route } from 'react-router-dom';

// Pages
import ContactPage from './pages/contactPage/ContactPage';
import UserRegisterPage from './pages/userRegisterPage/UserRegisterPage';
import LoginPage from './pages/userLoginPage/UserLoginPage';
import TasksPage from './pages/taskPages/TasksPage';
import AddTaskPage from './pages/taskPages/AddTaskPage';
import TaskByIdPage from './pages/taskPages/TaskByIdPage';
import UserProfilePage from './pages/userProfilePage/UserProfilePage';
import HomePage from './pages/homePage/HomePage';
import CalendarPage from './pages/calendarPage/CalendarPage';
import WorkerRegisterPage from './pages/workerRegisterPage/WorkerRegisterPage';
import WorkerLoginPage from './pages/workerLoginPage/WorkerLoginPage';
import WorkerProfilePage from './pages/workerProfilePage/WorkerProfilePage';

// Components
import UserRoutesComp from './components/protectedRoutes/userRoutesComp/UserRoutesComp';
import WorkerRoutesComp from './components/protectedRoutes/workerRoutesComp/WorkerRoutesComp';
import AdminRoutesComp from './components/protectedRoutes/AdminRoutesComp/AdminRoutesComp';

const App = () => {
  return (
    <div>
      <Routes>

        {/*Free Routes*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/appointment" element={<CalendarPage />} />
        <Route path='/user-register' element={<UserRegisterPage/>}/>
        <Route path='/user-login' element={<LoginPage/>}/>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/worker-login" element={<WorkerLoginPage/>}/>
        <Route path="/worker-register" element={<WorkerRegisterPage/>} />

        {/* User Protected Routes*/}
       <Route element={<UserRoutesComp/>}>
        <Route path='/tasks' element={<TasksPage/>}/>
        <Route path='/task/:id' element={<TaskByIdPage/>}/>
        <Route path='/user-profile' element={<UserProfilePage/>}/>
       </Route>

       {/* Worker Protected  Routes */}
       <Route element={<WorkerRoutesComp/>}>
        <Route path='/worker-profile' element={<WorkerProfilePage/>}/>
       </Route>

       {/* Admin Protected Routes */}
       <Route element={<AdminRoutesComp/>}>
        <Route path='/add-task' element={<AddTaskPage/>}/>
       </Route>
      </Routes>
    </div>
  )
}

export default App
