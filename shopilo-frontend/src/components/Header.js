import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <header className="header-top py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Shop Smarter, Shop Trendier, Shop Shopilo – Your Style, Your
                Store.
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Helpline:
                <Link className="text-white" href="tel:1800 556 2000">
                  1800 556 2000
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-mid py-1 text-white px-2">
        <div className="container-fluid-xxl">
          <div className="row aligh-item-center py-2">
            {/* logo */}
            <div className="header-mid-right py-2">
              <h2 className="mb-0 text-center">
                <Link className="text-white text-decoration-none" to="/">
                  Shopilo.com
                </Link>
              </h2>
            </div>

            {/* category */}
            <div className="col-1 category text-center">
            <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle bg-transparent border-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop by Category
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item " to=''>
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to=''>
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to=''>
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* search bar */}
            <div className=" col-2 header-mid-search py-2  w-50">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for anything"
                  aria-label="Search for anything"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <FiSearch className="fs-3" />
                </span>
              </div>
            </div>
            {/* login cart wishlist */}
            <div className="col-3">
              <div className="header-mid-left d-flex align-item-center justify-content-between">
                <div>
                  <Link className="d-flex align-item-center justify-content-center  gap-10 text-white text-decoration-none">
                    <img src="/images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-item-center justify-content-center  gap-10 text-white text-decoration-none">
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Wishlist <br />
                      Favourite
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-item-center justify-content-center  gap-10 text-white text-decoration-none">
                    <img src="/images/user.svg" alt="login" />
                    <p className="mb-0">
                      Login/
                      <br />
                      Sign up
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-item-start  gap-10 text-white text-decoration-none">
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">15</span>
                      <p className="mb-0">Rs. 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            
              <div className=" col-12 gap-3 header-bottom-links d-flex align-item-center justify-content-center w-100">
                <NavLink className="text-decoration-none text-white" to="/">
                  Home
                </NavLink>
                |
                <NavLink
                  className="text-decoration-none text-white"
                  to="/products"
                >
                  Our Products
                </NavLink>
                |
                <NavLink
                  className="text-decoration-none text-white"
                  to="/blogs"
                >
                  Blogs
                </NavLink>
                |
                <NavLink
                  className="text-decoration-none text-white"
                  to="/contact"
                >
                  24x7 Customer Care
                </NavLink>
              </div>
          
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
