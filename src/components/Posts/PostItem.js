import React from "react";
import { Link } from "react-router-dom";
const PostItem = ({ post }) => {
  return (
    <React.Fragment>
      <Link to={`/post/${post.id}`}>
        <li key={post.id}>{post.title}</li>
      </Link>
    </React.Fragment>
  );
};

export default PostItem;
