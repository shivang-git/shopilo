import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
const Store = () => {
  const title = "Store";
  const [grid, setGrid] = useState(4);

  return (
    <>
      <BreadCrumb title={title} />
      <div className="store-wrapper home-wrapper-1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by Categories</h3>
                <ul className="ps-0">
                  <li>Television</li>
                  <li> Computer</li>
                  <li>Camera</li>
                  <li>Phone</li>
                </ul>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter by</h3>
                <div> </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0">Sort By:</p>
                    <select
                      name="sort"
                      className=" form-control form-select"
                      id="sort"
                    >
                      <option value="Best-Selling" selected>
                        Best Selling
                      </option>
                      <option value="price-ascending">price-ascending</option>
                      <option value="price-descending">price-descending</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="prod-total mb-0">50 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="container">
                  <div className="row">
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
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

export default Store;
