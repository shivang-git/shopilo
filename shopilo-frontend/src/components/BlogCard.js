import React from "react";
import { NavLink, Link } from "react-router-dom";
const BlogCard = () => {
  return (
    <div className="blog-card p-0">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blogImage" />
      </div>
      <div className="card-text p-3">
        <p className="date mb-1">13 Dec, 2023</p>
        <h5 className="title mb-1">Blog title here</h5>
        <p className="desc">Blog desc here</p>
        <Link className="button">Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
