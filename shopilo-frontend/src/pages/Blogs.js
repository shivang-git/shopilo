import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
const blogs = () => {
    const title="Blogs"
  return (
    <>
        <BreadCrumb title={title}/>
      <div className="blog-wrapper home-wrapper-1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter by Categories</h3>
                <ul className="ps-0">
                  <li>Television</li>
                  <li> Computer</li>
                  <li>Camera</li>
                  <li>Phone</li>
                </ul>
              </div>
            </div>
            <div className="col-9">
                <div className="row">
                    <div className="col-6 mb-3"><BlogCard/></div>
                    <div className="col-6 mb-3"><BlogCard/></div>
                    <div className="col-6 mb-3"><BlogCard/></div>
                    <div className="col-6 mb-3"><BlogCard/></div>

                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default blogs;
