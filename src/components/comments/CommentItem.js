import React from "react";
import "../Posts/post.scss"
import PropTypes from "prop-types";

const CommentItem = ({ comment }) => {
  return (
    <div>
      <div className="card">
        <h3>{comment.name}</h3>
        <p>{comment.body}</p>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  comment:PropTypes.object
};

export default CommentItem;
