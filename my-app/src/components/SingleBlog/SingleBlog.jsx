import React from "react";
import "./singleBlog.css";
import { BASE_URL } from "../../utils/config";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  // console.log(id)

  const {
    data: blog,
    loading,
    error,
  } = useFetch(`${BASE_URL}/blog/singleblog/${id}`);
    console.log("blog :>> ", blog);

  return (
    <>
      <div className="mt-3">
        <img
          src={`https://source.unsplash.com/random/?${blog.topic}`}
          alt=""
          className="single__blog_image"
        />
      </div>
      <div className="mt-3">
        <h4 className="d-flex align-items-center justify-content-center single__blog_title">
          {blog.title}
        </h4>
        <h6 className="container mt-3 fst-italic fw-light fs-5 fw-normal single__blog_publishDate">
          Published on: 
          { new Date(blog.createdAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "numeric",
            year: "numeric",    
          })}
        </h6>
        <p className="container mt-3 blog__content" >{blog.content}</p>
      </div>
    </>
  );
};

export default SingleBlog;
