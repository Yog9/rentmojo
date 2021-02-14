import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPostDetails } from "../../actions/postDetailsActions";
import { fetchComments } from "../../actions/commentActions";
import "./post.scss";
import Comments from "../comments/Comments";
import "../comments/comment.scss";
import { useEffect } from "react";
import PropTypes from "prop-types";

const PostDetails = ({
  fetchPostDetails,
  postsDetails,
  fetchComments,
  comments,
}) => {
  const { post_id } = useParams();
  useEffect(() => {
    fetchPostDetails(post_id);
  }, []);
  
  return (
    <div>
       Post Details - {post_id}
      <div className="card">
        <h3>{postsDetails && postsDetails.title}</h3>
        <p>{postsDetails && postsDetails.body}</p>
        <p>
          <button onClick={() => fetchComments(post_id)}>Show Comments</button>
        </p>
      </div>
      <Comments comments={comments}/>
    </div>
  );
};

PostDetails.propTypes = {
    postsDetails:PropTypes.object,
    fetchPostDetails:PropTypes.func,
    fetchComments:PropTypes.func,
    comments:PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    postsDetails: state.postsDetails.postsDetails,
    comments: state.comments.comments,
  };
};
export default connect(mapStateToProps, {
  fetchPostDetails,
  fetchComments,
})(PostDetails);
