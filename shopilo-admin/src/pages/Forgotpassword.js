import React from 'react'
import {Link} from 'react-router-dom'
const Forgotpassword = () => {
  return (
    <section className="forget-password-wrapper home-wrapper-1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="forget-password-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <p className='text-center my-3'>Check your email to reset your password</p>
                <form action="" method='post' className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-3">
                    
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-20 flex-column">
                      <button className="button submit border-0" type='submit'>Submit</button>
                      <Link to="/" className='mt-3'>Cancel</Link>    
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

export default Forgotpassword