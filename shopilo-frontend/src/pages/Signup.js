import React from 'react'
import BreadCrumb from "../components/BreadCrumb";

import { useFormik } from 'formik';
import * as yup from 'yup'
import { registerUser } from '../features/user/userSlice';
import {useDispatch} from 'react-redux'

let signupSchema = yup.object({
  firstname:yup.string().defined().required("first name is Required"),
  lastname:yup.string().default("").required("lastname is required"),
  email:yup.string().nullable().email("email Should be valid"),
  mobile:yup.string().required("Mobile no. is required"),
  password:yup.string().required("Password is required")

});


const Signup = () => {
  const dispatch=useDispatch()
    const title="Sign Up"

    const formik = useFormik({
      initialValues: {
        firstname: '',
        lastname: '',
        email: '',
        mobile:'',
        password:''
      },
      validationSchema:signupSchema,
      onSubmit: values => {
       dispatch(registerUser(values))
      },
    });


  return (
   <>
      <BreadCrumb title={title} />
      <section className="sign-wrapper home-wrapper-1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign-card">
                <h3 className="text-center mb-3">Create New Account</h3>
                <form action=""  onSubmit={formik.handleSubmit}  className="d-flex flex-column gap-15">
                <div className='mt-3'>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      className="form-control"
                      value={formik.values.firstname}
                      onChange={formik.handleChange('firstname')}
                      onBlur={formik.handleBlur('firstname')}
                    />
                    <div className="error">
                      {formik.touched.firstname && formik.errors.firstname}
                    </div>
                  </div>
                  <div className='mt-3'>

                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      className="form-control"
                      value={formik.values.lastname}
                      onChange={formik.handleChange('lastname')}
                      onBlur={formik.handleBlur('lastname')}
                    />
                      <div className="error">
                      {formik.touched.lastname && formik.errors.lastname}
                    </div>
                  </div>
                  <div className="mt-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={formik.values.email}
                      onChange={formik.handleChange('email')}
                      
                    />
                      <div className="error">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  </div>
                  <div className="mt-3">
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      className="form-control"
                      value={formik.values.mobile}
                      onChange={formik.handleChange('mobile')}
                    />
                      <div className="error">
                      {formik.touched.mobile && formik.errors.mobile}
                    </div>
                  </div>
                  <div className="mt-3">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      value={formik.values.password}
                      onChange={formik.handleChange('password')}
                    />
                      <div className="error">
                      {formik.touched.password && formik.errors.password}
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-20">
                      <button className="button border-0">Sign up</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup