import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from '../images/watch.jpg'


const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left">
                <h3>Shopilo</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                     <Link to="#">Home </Link> &nbsp;&gt;
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Library
                    </li>
                  </ol>
                </nav>
                <h4>Contact Information</h4>
                <p>John Doe (johndoe@gmail.com)</p>
                <form
                  action=""
                  className="d-flex gap-10 flex-wrap justify-content-between"
                >
                  <div className="w-100 my-1">
                    <select
                      name=""
                      className="form-control form-select"
                      id=""
                    ></select>
                  </div>
                  <div className=" my-1 flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className=" my-1 flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="w-100 my-1 ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Flat No./House No."
                    />
                  </div>
                  <div className="w-100  my-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Near Landmark"
                    />
                  </div>
                  <div className="flex-grow-1 my-1 ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                  <div className="flex-grow-1  my-1">
                    <select
                      name="State"
                      className="form-control form-select"
                      id="state"
                      placeholder="State"
                    ></select>
                  </div>
                  <div className="flex-grow-1  my-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Postal Code"
                    />
                  </div>

                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="return-cart">
                        <BiArrowBack /> Return to Cart
                      </Link>
                      <Link to="" className="button-proceed">
                        Proceed
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
              <div className="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
                <div className="ms-lg-4 mt-4 mt-lg-0" style={{"max-width": "320px"}}>
                  <h6 className="mb-3">Summary</h6>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2">$195.90</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Discount:</p>
                    <p className="mb-2 text-danger">- $60.00</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Shipping cost:</p>
                    <p className="mb-2">+ $14.00</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2 fw-bold">$149.90</p>
                  </div>

                  <div className="input-group mt-3 mb-4">
                    <input
                      type="text"
                      className="form-control border"
                      name=""
                      placeholder="Promo code"
                    />
                    <button className="btn btn-light text-primary border">
                      Apply
                    </button>
                  </div>

                  <hr />
                  <h6 class="text-dark my-4">Items in cart</h6>

<div class="d-flex align-items-center mb-4">
  <div class="me-3 position-relative">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
      1
    </span>
    <img src={watch} alt="watch" style={{"height": "96px", "width": "96px"}} class="img-sm rounded border" />
  </div>
  <div class="">
   <Link to="#" class="nav-link">
      Realme watch Neo 2 <br />
      Darkblue color
    </Link>
    <div class="price text-muted">Total: $295.99</div>
  </div>
</div>
                </div>
                    

              </div>
    
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
