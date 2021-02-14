import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";
import "./post.scss";
import PostItem from "./PostItem";
import SearchBar from "../searchBar";
import { itemsLoading } from "../../actions/itemsLoadingActions";
import Loading from "../Loading/Loading";


const Posts = ({ fetchPosts, posts, isLoading, itemsLoading,isPostsLoading }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [postSet, setPostSet] = useState(false);

  const { user_id } = useParams();
  useEffect(() => {
    fetchPosts(user_id);
  }, []);

  const [postsFiltered, setPostsFiltered] = useState(posts);

  if (!isPostsLoading && !postSet) {
    setPostsFiltered(posts);
    setPostSet(true);
  }
  let filteredTitle = posts;

  const postItems = postsFiltered.map((post) => (
    <PostItem key={post.id} post={post} />
  ));

  const updateTitle = async(input) => {
    let trimInput = input.trim();
    if (trimInput) {
      filteredTitle = posts.filter((post) => {
        return post.title.toLowerCase().includes(trimInput.toLowerCase());
      });
    }
    setInputTitle(input);
    setPostsFiltered(filteredTitle);
  };
 
  return (
    isPostsLoading?<Loading/>:(
    <React.Fragment>
      {" "}
      <SearchBar
        input={inputTitle}
        onChange={updateTitle}
        placeholder="Search Title"
      />
      <ul>{postItems}</ul>
    </React.Fragment>
    )
  );
};

Posts.propTypes = {
    posts: PropTypes.array,
    fetchPosts:PropTypes.func,
    isLoading:PropTypes.bool
};

const mapStateToProps = (state) => {
    return{
    posts: state.posts.posts,
    isLoading:state.isLoading.isLoading,
    isPostsLoading:state.posts.isPostsLoading
  }
};

export default connect(mapStateToProps, { fetchPosts,itemsLoading })(Posts);
