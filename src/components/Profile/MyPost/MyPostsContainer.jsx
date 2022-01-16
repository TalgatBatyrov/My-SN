import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../../Redux/profileReducer';
import MyPost from './MyPosts';

const MyPostsContainer = (props) => {
    return (
        <MyPost addPost={props.addPost} posts={props.posts} />
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

export default connect(mapStateToProps, { addPost })(MyPostsContainer);