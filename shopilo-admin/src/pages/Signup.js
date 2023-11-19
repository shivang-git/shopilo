import React from "react";
import {Link} from 'react-router-dom'


const Signup = () => {
  return (
    <section className="sign-wrapper py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sign-card">
              <h3 className="text-center mb-3">Create New Account</h3>
              <form
                action=""
                method="post"
                className="d-flex flex-column gap-15"
              >
                <div className="d-flex gap-3">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control"
                  />
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
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
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-20 flex-column">
                    <button className="button border-0">Sign up</button>
                    <Link className="mt-3" to="/">
                      log in
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

export default Signup;
