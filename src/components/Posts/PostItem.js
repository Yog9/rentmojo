import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostItem = ({ post }) => {
  return (
    <React.Fragment>
      <Link to={`/${post.userId}/posts/${post.id}`}>
        <li key={post.id}>{post.title}</li>
      </Link>
    </React.Fragment>
  );
};
PostItem.propTypes = {
  post: PropTypes.object,
};
export default PostItem;
