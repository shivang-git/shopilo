import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import {FaArrowsRotate} from 'react-icons/fa6'
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
                <a className="text-white" href="tel:1800 556 2000">
                  1800 556 2000
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-mid py-1 text-white">
        <div className="container-fluid-xxl">
          <div className="row">
            {/* logo */}
            <div className="col-1 header-mid-right py-1 p-4">
              <h2 className="mb-0 text-center">
                <Link className="text-white text-decoration-none" to="/">
                  Shopilo.com
                </Link>
              </h2>
            </div>

            <div className="col-1 text-center">
              Shop by <br /> Category
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
            <div className="col-3 ">
              <div className="header-mid-left d-flex align-item-center justify-content-around">
                <div>
                  <Link className="d-flex align-item-center justify-content-center gap-10 text-white text-decoration-none">
                  <FaArrowsRotate className="fs-3"/>
                    <p>Compare <br />Products</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-item-center gap-10 text-white text-decoration-none">
                    <img src="" alt="" />
                    <p> Favourite/<br />Wishlists</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-item-center gap-10 text-white text-decoration-none">
                    <img src="" alt="" />
                    <p>Login/<br />Sign up</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-item-center gap-10 text-white text-decoration-none">
                    <img src="" alt="" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                        <p className="mb-0">Rs. 5000</p>
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
          <div className="row ">
            <div className="col-12">

            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
