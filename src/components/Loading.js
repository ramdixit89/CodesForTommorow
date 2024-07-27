import React from "react";
import "./Loading.css";
const Loading = () => {
  return (
    <>
      <h1 className="text-center">Loading...</h1>
      <div class="loader">
        <div class="wrapper">
          <div class="circle"></div>
          <div class="line-1"></div>
          <div class="line-2"></div>
          <div class="line-3"></div>
          <div class="line-4"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
