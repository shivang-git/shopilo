import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useDispatch,useSelector} from 'react-redux'
import {login} from '../features/auth/authSlice';

const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const schema = Yup.object().shape({
    email: Yup.string().email("Enter a valid email").required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values))
    },
  });

  const {user,isLoading,isError,isSuccess,message}=useSelector(
    (state)=>state.auth
  )
  useEffect(()=>{
      if(isSuccess){
        navigate('admin')
      }else{
        navigate('')
      }
  },[user,isLoading,isError,isSuccess,message])

  return (
    <section className="login-wrapper py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-3">Login</h3>
              <form
                action=""
                className="d-flex flex-column gap-15"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="error mx-2">*{formik.errors.email}</div>
                  ) : null}
                </div>

                <div className="mt-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    id="pass"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div className="error mx-2">*{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="mt-3">
                  <Link to="/forgot-password"> Forgot Password?</Link>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-20 flex-column">
                    <button type="submit" className="button login border-0">
                      Log in
                    </button>
                    <Link className="mt-3" to="/signup">
                      Create New Account?
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
