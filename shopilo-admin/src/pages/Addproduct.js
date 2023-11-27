import React, { useEffect, useState } from "react";

import CustomInput from "../components/CustomInput";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Dropzone from 'react-dropzone'
import { useDispatch, useSelector } from "react-redux";
import { getProductCategory } from "../features/productCategory/productCategorySlice";
import { uploadImg} from "../features/upload/uploadSlice";


const Addproduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductCategory());
  }, []);

  const { productsCategories } = useSelector((state) => state.productCategory);

  const schema = Yup.object().shape({
    title: Yup.string().required("Title is Required"),
    description: Yup.string().required("Description is Required"),
    price: Yup.number().required("Price is Required"),
    category: Yup.string().required("Category is Required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      category: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert("submited");
    },
  });

  return (
    <div>
      <h3 className="mb-4"> Add Blog</h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Enter Product Title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>

          <div className="mt-3">
            <ReactQuill
              theme="snow"
              name="description"
              value={formik.values.description}
              onChange={formik.descripiton}
            />
          </div>

          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>
          <CustomInput
            type="text"
            label="Enter Product Price "
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          <div className="error">
            {formik.touched.price && formik.errors.price}
          </div>

          <select
            name="category"
            onChange={formik.handleChange("category")}
            value={formik.values.category}
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="">Select Category</option>
            {productsCategories.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>

          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>

          <div className="bg-white border-1 p-5 text-center">
            <Dropzone onDrop={(acceptedFiles) =>  dispatch(uploadImg(acceptedFiles))}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>

          <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-5"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
