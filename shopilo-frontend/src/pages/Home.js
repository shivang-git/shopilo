import React from "react";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="banner-content p-3">
                <img src="images/main-banner.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="d-flex  align-item-center justify-content-between">
                <div>
                  <img
                    src="images/service.png"
                    className="rounded mx-auto d-block"
                    alt="services"
                  />
                  <div className="services-text d-flex flex-column align-items-center gap-15">
                    <h6 className="mb-0">Free Shipping</h6>
                    <p className="mb-0">From all order over Rs.2000</p>
                  </div>
                </div>
                <div>
                  <img
                    src="images/service-02.png"
                    className="rounded mx-auto d-block"
                    alt="services"
                  />
                  <div className=" services-text d-flex flex-column align-items-center gap-15">
                    <h6 className="mb-0">Daily Special Offers</h6>
                    <p className="mb-0">Save up to 40% off</p>
                  </div>
                </div>
                <div>
                  <img
                    src="images/service-03.png"
                    className="rounded mx-auto d-block"
                    alt="services"
                  />
                  <div className=" services-text d-flex flex-column align-items-center gap-15">
                    <h6 className="mb-0">Support 24/7</h6>
                    <p className="mb-0">Get expert help</p>
                  </div>
                </div>
                <div>
                  <img
                    src="images/service-04.png"
                    className="rounded mx-auto d-block"
                    alt="services"
                  />
                  <div className=" services-text d-flex flex-column align-items-center gap-15">
                    <h6 className="mb-0">Affordable Prices</h6>
                    <p className="mb-0">Get product at minimal rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-wrapper p-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="product-heading">Featured Collection</h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          
          </div>
        </div>
      </section>

      <section className="blog-wrapper p-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="blog-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
