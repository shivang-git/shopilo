import React from "react";
import { Link } from "react-router-dom";
const BreadCrumb = ({ title }) => {
  return (
    <div className="breadcrumb mb-0 py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex align-item-center justify-content-center">
            <p>
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
