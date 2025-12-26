import React, { useState } from "react";
import { BASE_URL, token } from "../../utils/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [blog, setBlog] = useState({
    topic: undefined,
    title: undefined,
    content: undefined,
  });
  const navigate = useNavigate();


  const handleChange = (e) => {
    setBlog((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleTopicChange = (e) => {
    setBlog((prev) => ({ ...prev, topic: e.target.value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('blog:', blog);
    try {
      const res = await fetch(`${BASE_URL}/blog/createNewBlog`, {
        method: "POST",
        headers: { "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
       },
        body: JSON.stringify(blog),
      }); 

      const result = await res.json();
      if (!result.ok) {
        // toast(result.message);
        // alert(result.message)
        // console.log('result.message :>> ', result.message);
      }
      toast(result.message);
      navigate("/");

    } catch (error) {
      toast(e.message);
    }
  };

  return (
    
    <div>
      <h1 className="container fst-italic">Create Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="ms-5 me-5 mt-5">
          <div>
            <label htmlFor="topic" className="form-label">
              Topic
            </label>
            <select
              id="topic"
              className="form-select mb-3"
              aria-label="Default select example"
              onChange={handleTopicChange}
            >
              <option value="" disabled selected>
                Select a topic
              </option>
              <option value="JavaScript">JavaScript</option>
              <option value="ReactJS">ReactJS</option>
              <option value="NodeJS">NodeJS</option>
              <option value="expressjs">ExpressJS</option>
              <option value="ExpressJS">CSS</option>
              <option value="HTML">HTML</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Title of Blog"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Blog Content
            </label>
            <textarea
              id="content"
              className="form-control"
              rows="9"
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="container btn btn-info" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
