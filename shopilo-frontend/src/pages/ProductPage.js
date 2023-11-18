import React from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <>
      <div className="main-product-wrapper py-5 home-wrapper-1">
        <div className="container my-5">
          {/* Top Page Design Starts */}
          <div className="row g-5   ">
            {/* Product Image Starts */}
            <div className="col-md-3">
              <img
                src="/images/watch.jpg"
                className="img-fluid"
                alt="watch"
              />
            </div>{" "}
            {/* Product Image Ends */}
            {/* Product Details Starts */}
            <div className="col-md-4">
              <h6 className="font-weight-bold">
                Redmi 8A Dual (Sea Blue, 2GB RAM, 32GB Storage) – Dual Cameras
                &amp; 5,000 mAH Battery
              </h6>
              <p>
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star-half-alt text-warning" />
              </p>
              <div className="dropdown-divider mt-3" />
              <p className="mb-0">
                <span className="text-muted mr-2">M.R.P.:</span>
                <span className="text-danger font-weight-bold">
                  <i className="fas fa-rupee-sign" /> 8000/-
                </span>
              </p>
              <p>
                <span className="text-muted mr-2">You Save:</span>
                <span className="text-danger font-weight-bold">
                  <i className="fas fa-rupee-sign" /> 4000/-
                </span>
              </p>
              {/* Delivery Quality Images starts */}
              <div className="row" style={{ fontSize: 12, fontWeight: "bold" }}>
                <div className="col-md-3">
                  <img
                    src="/images/free.png"
                    width={35}
                    height={35}
                    className="rounded"
                    alt="delivery1"
                    srcSet=""
                  />
                  <br />
                  <Link to="#">Free delivery</Link>
                </div>
                <div className="col-md-3">
                  <img
                    src="/images/replace.png"
                    width={35}
                    height={35}
                    className="rounded"
                    alt="delivery2"
                    srcSet=""
                  />
                  <br />
                  <Link to="#">7 Day Replacement</Link>
                </div>
                <div className="col-md-3">
                  <img
                    src="/images/shopilo.png"
                    width={35}
                    height={35}
                    className="rounded"
                    alt="delivery3"
                    srcSet=""
                  />
                  <br />
                  <Link to="#">Shopilo Delivered</Link>
                </div>
                <div className="col-md-3">
                  <img
                    src="/images/warranty.png"
                    width={35}
                    height={35}
                    className="rounded"
                    alt="delivery04"
                    srcSet=""
                  />
                  <br />
                  <Link to="#">1 Year Waranty</Link>
                </div>
              </div>{" "}
              {/* Delivery Quality Images ends */}
              <div className="dropdown-divider mt-3" />
              <p className="text-success font-weight-bold">In stock.</p>
              <p>
                Sold by:
                <Link to="#">ABC Seller</Link>
              </p>
              {/* Product Description Starts */}
              <ul className="ml-n3">
                <li>13+2MP dual rear AI camera with PDAF | 8MP front camera</li>
                <li>
                  15.7988 centimeters (6.22-inch) HD+ Dot notch display with
                  1520 x 720 pixels resolution and 19:9 aspect ratio | 2.5D
                  curved glass
                </li>
                <li>
                  Memory, Storage &amp; SIM: 2GB | 32GB internal memory
                  expandable up to 512GB with dedicated memory card slot | Dual
                  SIM (nano+nano) dual-standby (4G+4G)
                </li>
                <li>
                  Android Pie v9.0 operating system with 1.95GHz Snapdragon 439
                  octa core processor
                </li>
                <li>5000mAH lithium-polymer battery</li>
                <li>
                  Box also includes: Power adapter, USB cable, SIM eject tool,
                  warranty card and user guide. The box does not include
                  earphones
                </li>
              </ul>{" "}
              {/* Product Description Ends */}
            </div>{" "}
            {/* Product Details Starts */}
            {/* Add Product Card starts */}
            <div className="col-md-4 text-center">
              {/* Card starts */}
              <div className="card shadow rounded float-md-right">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" name="quantity" className="quantity" />
                  </div>
                  <p className="mb-2 mt-2">
                    <span className="text-muted mr-2">M.R.P.:</span>
                    <span className="text-danger font-weight-bold">
                      <i className="fas fa-rupee-sign" /> 8000/-
                    </span>
                  </p>
                  <div className="d-flex align-items-center justify-content-center flex-column">
                    <Link to="#" className="btn add-card mb-3">
                      Add to cart
                    </Link>

                    <Link to="#" className="btn add-card">
                      Buy Now
                    </Link>
                  </div>
                  <div className="dropdown-divider mt-2 mb-2" />
                  <Link to="#">
                    <i className="fas fa-map-marker-alt text-dark" />
                    Select Delivery Location
                  </Link>
                </div>
              </div>{" "}
              {/* Card ends  */}
            </div>{" "}
            {/* Add Product Card ends */}
          </div>{" "}
          {/* Top Page Design Ends */}
          <div className="row border-bottom border-top">
            <div className="col-md-12">
              <p className="text-danger font-weight-bold">
                Save Extra with 5 offers
              </p>
              <ul>
                <li>
                  <span className="text-danger">No Cost EMI:</span> Avail No
                  Cost EMI on select cards for orders above ₹3000
                </li>
                <li>
                  <span className="text-danger">Exchange Offer:</span> Enter
                  your pincode to view Exchange offer
                </li>
                <li>
                  <span className="text-danger">Cashback (2):</span> 5% back
                  with Amazon Pay ICICI Bank Credit card for Prime-members. 3%
                  back for everybody else. Here's how{" "}
                </li>
                <li>
                  <span className="text-danger">Bank Offer (2): </span> Get 5%
                  up to Rs. 1500 Instant Discount on Bank of Baroda Credit EMI
                  transactions Here's how
                </li>
                <li>
                  <span className="text-danger">Partner Offers (3): </span> Buy
                  now &amp; pay next month at 0% interest or pay in EMIs with
                  Amazon Pay Later. Instant credit upto ₹20,000. Check
                  eligibility here! Here's how{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="row border-bottom mt-3">
            <div className="col-md-12 my-3">
              <h6 className="text-warning font-weight-bold">
                Product description
              </h6>
              <p className="ml-3">
                Colour: Sea Blue | Size name:32 GB Take strikingly clear photos
                with the 13MP + 2MP AI dual camera. Capture the beauty of any
                scene, while the AI-powered portrait mode with Beautify blurs
                the background to create portraits that stand out. The octa-core
                processor takes operational efficiency to the next level which
                results in brilliant performance.
              </p>
            </div>
          </div>
          {/* Customer Review starts */}
          <section className="reviews-wrapper py-5 ">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <div className="review-head d-flex justify-content-between align-items-end mb-3">
                    <div>
                      <h4 className="mb-2">Customer Reviews</h4>
                      <div className="d-flex gap-10"></div>
                    </div>
                    <div>
                      <Link className="text-dark text-decoration-underline">
                        Write a Review
                      </Link>
                    </div>
                  </div>
                  <div className="review-form">
                    <form action="" className="d-flex flex-column gap-15">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Mobile Number"
                        />
                      </div>
                      <div className="mb-3">
                        <textarea
                          className="w-100 form-control"
                          name="Comments"
                          id="comments"
                          cols="30"
                          rows="4"
                          placeholder="Comments"
                        ></textarea>
                      </div>
                      <div>
                        <button className="button submit border-0">
                          {" "}
                          Submit Review
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="reviews mt-4">
                    <div className="review">
                      <div className="d-flex gap-10 align-items-center">
                        <h6 className="mb-0">Shubham</h6>
                      </div>
                      <p className="mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio qui asperiores magnam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="product-wrapper py-4">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 className="product-heading">Similar Products</h3>
                </div>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </section>
          {/* Customer Review ends */}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
