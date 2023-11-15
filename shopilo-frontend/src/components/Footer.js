import React from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-top">
        <div className="container-xxl">
          <div className="row">
            <div className="footer-top-text">
              <span>Back to top</span>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-mid py-4">
        <div className="container-xxl">
          <div className="row px-3">
            <div className="col-2">
              <div className="mb-3 footer-mid-heads"> Get to Know Us</div>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white mb-1">About Us</Link>
                <Link className="text-white mb-1">Careers</Link>
                <Link className="text-white mb-1">Press Release</Link>
              </div>
            </div>

            <div className="col-2">
              <div className="mb-3 footer-mid-heads"> Let Us Help You</div>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white mb-1">Payment</Link>
                <Link className="text-white mb-1">Shipping Policy</Link>
                <Link className="text-white mb-1">Cancellation & Returns</Link>
                <Link className="text-white mb-1">FAQ</Link>
                <Link className="text-white mb-1">Terms & Conditions</Link>
              </div>
            </div>

            <div className="col-2">
              <div className="mb-3 footer-mid-heads"> Consumer Policy</div>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white mb-1">Terms Of Use</Link>
                <Link className="text-white mb-1">Privacy Policy</Link>
                <Link className="text-white mb-1">Grievance</Link>
                <Link className="text-white mb-1">Redressal</Link>
              </div>
            </div>
            <div className="col-2">
              <div className="mb-3 footer-mid-heads"> Connect with Us</div>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white mb-1">Instagram</Link>
                <Link className="text-white mb-1">Twitter</Link>
                <Link className="text-white mb-1">Facebook</Link>
                <Link className="text-white mb-1">Youtube</Link>
              </div>
            </div>

            <div className="col-3">
              <div className="mb-3 footer-mid-heads">
                Registerd Office Address
              </div>
              <div className="footer-link d-flex flex-column">
                Shopilo India Private Limited, Mahmoorganj, Varanasi, 221010,
                Uttar Pradesh, India Telephone: 0542-2222222
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-bottom py-4">
        <div className="container-xxl">
          <div className="row align-item-center">
            <div className="col-5">
              <div className="footer-letter d-flex gap-4 align-itme-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <p className="text-center pt-2 mb-0 text-white"> &copy; {new Date().getFullYear()} Created by Shivang Srivastava with ♥ </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
