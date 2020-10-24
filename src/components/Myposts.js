import React, { useState } from "react";
import PropTypes, { array, object, string } from "prop-types";
import Post from "./post";
const Myposts = () => {
  return (
    <div className="center">
      <Post />
    </div>
  );
};

Myposts.propTypes = {
  statepost: array,
};
export default Myposts;
