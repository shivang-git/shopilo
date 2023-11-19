import {Link} from 'react-router-dom'
import React from 'react'

const Login = () => {
  return (
    <section className="login-wrapper py-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <div className="login-card">
            <h3 className="text-center mb-3">Login</h3>
            <form action="" method="post" className="d-flex flex-column gap-15">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="mt-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <div className="mt-3">
                <Link to="/forgot-password"> Forgot Password?</Link>
                <div className="mt-3 d-flex justify-content-center align-items-center gap-20 flex-column">
                  <Link to='/admin' className="button login border-0">Log in</Link>
                  <Link className="mt-3" to='/signup'>Create New Account?</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login