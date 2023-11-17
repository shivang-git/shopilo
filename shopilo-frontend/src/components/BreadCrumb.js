import React from "react";
import { Link } from "react-router-dom";
const BreadCrumb = ({ title }) => {
  return (
    <div className="breadcrumb mb-0 py-2">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-item-center justify-content-center">
            <p className="mb-0 py-2">
              <Link to="/" className="text-dark text-decoration-none ">
                Home
              </Link>
              &nbsp; / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
