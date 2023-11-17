import React from "react";
import BreadCrumb from "../components/BreadCrumb";
const Wishlist = () => {
  const title = "Wishlist";
  return (
    <>
      <BreadCrumb title={title} />
      <section className="wishlist-wrapper home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
                <div className="wishlist-card position-relative">
                    <img
                     className="position-absolute img-fluid cross"
                    src="images/cross.svg"
                    alt="cross"
                    />
                    <div className="wishlist-card-image">
                    <img src="images/watch.jpg" alt="watch" />
                    </div>
                    <div className="py-3 px-3">
                    <h5 className="title">Redmi note 11 pro max (6gb & 128gb)</h5>
                      <h6 className="price">Rs. 12000</h6>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
