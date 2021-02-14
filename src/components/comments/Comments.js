import React from "react";
import "../Posts/post.scss";
import CommentItem from "./CommentItem";
import { connect } from "react-redux";
import { deletePost } from "../../actions/deletePostActions";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const Comments = ({ comments,deletePost }) => {
    let history = useHistory();
  const commentItems = comments.map((comment) => (
    <CommentItem key={comment.id} comment={comment} />
  ));

  const { user_id } = useParams();

  const onSubmit = () => {
    deletePost(user_id);
    console.log("post deleted")
    history.push(`/${user_id}/posts`)
  };

  return (
    <React.Fragment>
      {commentItems}
      <button onClick={onSubmit}>Delete this post</button>
    </React.Fragment>
  );
};

Comments.propTypes = {
  deletePost:PropTypes.func,
  comments:PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    post: state.post.post,
    error:state.post,
  };
};

export default connect(mapStateToProps, { deletePost })(Comments);
