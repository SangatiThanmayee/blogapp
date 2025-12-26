import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div>
      <div className="container loader">
        <figure className="loader">
          <div className="dot white"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </figure>
      </div>
    </div>
  );
};

export default Loading;
