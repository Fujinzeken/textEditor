"use client";
import React, { useState } from "react";
import parser from "html-react-parser";
import { Col, Row, Container } from "reactstrap";

interface PostDataProp {
  topic: string;
  post: string;
  setShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
}

const Preview: React.FC<PostDataProp> = ({ post, topic, setShowPreview }) => {
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    if (post === "" || topic === "") {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setShowPreview(false);
      setLoading(false);
      alert("post has been saved successfully");
    }, 3000);
  };
  return (
    <section className="preview-container">
      <div className="preview-wrapper d-flex flex-column gap-4 align-items-center p-4 w-50 w-sm-100">
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "10vh" }}
          >
            <div className="spinner-border text-primary" role="status">
              <span className="">Loading...</span>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="d-flex flex-column gap-4 w-100">
          <h4 className="text-center">Title: {topic}</h4>
          <div className="w-100 post-container">
            <p>{parser(post)}</p>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row gap-4 align-items-center">
          <button className="btn btn-primary w-40" onClick={() => handleSave()}>
            Save
          </button>
          <button
            className="btn btn-outline-dark w-40"
            onClick={() => setShowPreview(false)}
          >
            close
          </button>
        </div>
      </div>
    </section>
  );
};

export default Preview;
