//User Registration Form using two field email and password

import { useFormik } from "formik";
import { initialValues, validationSchema } from "./Validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const UserRegistration = () => {
    const navigate=useNavigate();
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
        try {
            await createUserWithEmailAndPassword(auth, values.email, values.password);
            // alert("User registered!");
            toast.success('User registered successfully!')
            navigate('/');
        } catch (err) {
            console.error(err.message);
            toast.error('Registration failed! Please check your credentials.');
        }
        }
    });
    return (
        <div className='auth-form-container'>
            <form onSubmit={formik.handleSubmit}>
                <div className='auth-form'>
                    <h2 className='auth-form-title'>Complete Your Registration</h2>

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
                <div>
                <button type="submit" className='button1'>Register</button>
                <button type="button" className='button2' onClick={() => navigate('/')}>Back to Login</button>
                <p className='auth-form-link'>Already have an account? <span onClick={() => navigate('/')}>Login</span></p>
                </div>
            </form>
        </div>
    );
}

export default UserRegistration;