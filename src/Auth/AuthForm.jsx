// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';
// import { initialValues } from './Validation';
// import { useFormik } from 'formik';
// import { Link } from 'react-router';

// const AuthForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const formik= useFormik({
//     initialValues: initialValues,
//     onSubmit: values => {
//       console.log(values);
//     }
//   });

//   const handleRegister = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       alert("User registered!");
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert("Logged in!");
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <div className='auth-form-container'>
//       <form onSubmit={formik.handleSubmit}>
//       <div className='auth-form'>
//         <h2 className='auth-form-title'>Enter Your Credential For LogIn</h2>
//       <input type="email" className='auth-form-input' value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" className='auth-form-input' value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <div className='button-container' >
//       <div className='button1' onClick={handleRegister}>Click Here for Register</div>
//       <button className='button2' onClick={handleLogin}>Login</button>
//       </div>
//       </form>
//     </div>
//   );
// };

// export default AuthForm;

import React from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useFormik } from 'formik';
import validationSchema from './Validation';
import { initialValues } from './Validation';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


const AuthForm = () => {
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema, // optional if using Yup
    onSubmit: async (values) => {
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        // alert("Logged in!");
        toast.success('Logged in successfully!')
        navigate('/dashboard');
      } catch (err) {
        console.error(err.message);
        toast.error('Login failed! Please check your credentials.');
      }
    }
  });

  const handleRegister = async () => {
    navigate('/registration');
    // try {
    //   await createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password);
    //   alert("User registered!");
    // } catch (err) {
    //   console.error(err.message);
    // }
  };

  return (
    <div className='auth-form-container'>
      <form onSubmit={formik.handleSubmit}>
        <div className='auth-form'>
          <h2 className='auth-form-title'>Enter Your Credentials</h2>

          <input
            type="email"
            name="email"
            className='auth-form-input'
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className='error'>{formik.errors.email}</div>
          )}

          <input
            type="password"
            name="password"
            className='auth-form-input'
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className='error'>{formik.errors.password}</div>
          )}
        </div>

        <div className='button-container'>
          <div className='button1' onClick={handleRegister}>Click Here for Register</div>
          <button type="submit" className='button2'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;

