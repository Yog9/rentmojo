import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const Posts = (props) => {
  const { user_id } = useParams();
  return <div>posts with user id{ user_id }</div>;
};

Posts.propTypes = {};

export default Posts;
