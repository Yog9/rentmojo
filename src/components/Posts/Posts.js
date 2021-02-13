import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";
import "./post.scss"
import PostItem from "./PostItem";

const Posts = ({ fetchPosts, posts }) => {
  const { user_id } = useParams();
  useEffect(() => {
    fetchPosts(user_id);
  }, [fetchPosts,user_id]);
  const postItems = posts.map((post) => <PostItem key ={post.id} post={post}/>);
  return <ul>{postItems}</ul>;
};

Posts.propTypes = {};
const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});
export default connect(mapStateToProps, { fetchPosts })(Posts);
