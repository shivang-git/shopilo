import React, { useState } from "react";
import CustomInput from "../components/CustomInput";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Addblog = () => {
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    setDesc(e);
  };
  return (
    <>
      <div>
        <h3 className="mb-4"> Add Blog</h3>
        <div>
          <form action="">
            <CustomInput type="text" label="Enter Blog Title" />
            <select
              name="blog-category"
              id=""
              className="form-control py-3 my-3"
            >
              <option value="category">Select Blog Category</option>
            </select>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </Dragger>
            <div className="mt-3">

            <ReactQuill
              theme="snow"
              value={desc}
              onChange={(e) => {
                handleDesc(e);
              }}
            />
            </div>
            ;
            <button className="btn btn-success border-0 rounded-3 my-5">
              Add Blog
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addblog;
