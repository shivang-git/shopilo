import React from 'react'

const Resetpassword = () => {
  return (
    <section className="reset-password-wrapper home-wrapper-1 py-5">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="reset-password-card">
            <h3 className="text-center mb-3">Reset Password</h3>
            <form action="" method='post' className="d-flex flex-column gap-15">
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <div className='mt-3'>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  className="form-control"
                />
              </div>
              <div className="mt-3">
                
                <div className="mt-3 d-flex justify-content-center align-items-center gap-20 flex-column">
                  <button className="button submit border-0" type='submit'>Submit</button>

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

export default Resetpassword