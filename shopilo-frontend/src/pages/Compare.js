import React from "react";
import BreadCrumb from "../components/BreadCrumb";


const Compare = () => {
  const title="Compare Product"  
  return (
    <>
      <BreadCrumb title={title}/>
      <section className="compare-product-wrapper home-wrapper-1 py-5">
        <div className="container-xxl">
            <div className="row">
              <div className="col-3">
                <div className="compare-product-card position-relative">
                    <img className="position-absolute img-fluid cross" src="images/cross.svg" alt="cross" />
                    <div className="product-card-image">
                      <img src="images/watch.jpg" alt="watch" />
                    </div>
                    <div className="compare-product-details">
                      <h5 className="title">Redmi note 11 pro max (6gb & 128gb)</h5>
                      <h6 className="price mb-3">Rs. 12000</h6>
                    </div>
                    <div className="product-features">
                      <h5>Brands:</h5>
                      <p>Redmi</p>
                    </div>
                    
                    <div className="product-features">
                      <h5>Brands:</h5>
                      <p>Redmi</p>
                    </div>
                    <div className="product-features">
                      <h5>Brands:</h5>
                      <p>Redmi</p>
                    </div>
                </div>
              </div>
              <div className="col-3">
                <div className="compare-product-card position-relative">
                    <img className="position-absolute img-fluid cross" src="images/cross.svg" alt="cross" />
                    <div className="product-card-image">
                      <img src="images/watch.jpg" alt="watch" />
                    </div>
                    <div className="compare-product-details">
                      <h5 className="title">Redmi note 11 pro max (6gb & 128gb)</h5>
                      <h6 className="price mb-3">Rs. 12000</h6>
                    </div>
                    <div className="product-features">
                      <h5>Brands:</h5>
                      <p>Redmi</p>
                    </div>
                    
                    <div className="product-features">
                      <h5>Brands:</h5>
                      <p>Redmi</p>
                    </div>
                    <div className="product-features">
                      <h5>Brands:</h5>
                      <p>Redmi</p>
                    </div>
                </div>
              </div>
              <div className="col-3">
                <div className="compare-product-card position-relative">
                    <img className="position-absolute img-fluid cross" src="images/cross.svg" alt="cross" />
                    <div className="product-card-image">
                      <img src="images/watch.jpg" alt="watch" />
                    </div>
                    <div className="compare-product-details">
                      <h5 className="title">Redmi note 11 pro max (6gb & 128gb)</h5>
                      <h6 className="price mb-3">Rs. 12000</h6>
                    </div>
                    <div className="product-features">
                      <h5>Brands:</h5>
                      <p>Redmi</p>
                    </div>
                    
                    <div className="product-features">
                      <h5>Brands:</h5>
                      <p>Redmi</p>
                    </div>
                    <div className="product-features">
                      <h5>Brands:</h5>
                      <p>Redmi</p>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Compare;
