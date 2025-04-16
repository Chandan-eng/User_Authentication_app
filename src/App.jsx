
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import AuthForm from './Auth/AuthForm'
import UserRegistration from './Registration/UserRegistration'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Dashboard/Dashboard';


function App() {

  return (
    <>
 <h1>User Authentication App Using Firebase.</h1>
 {/* <AuthForm/> */}
 <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<AuthForm />} />
  <Route path="/registration" element={<UserRegistration />} />
  <Route path="/dashboard" element={<Dashboard />} />
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
