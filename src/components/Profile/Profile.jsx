import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../profileReducer';
import MyPost from './MyPost/MyPost';

const Profile = (props) => {
    return (
        <div>
            <div>
                <MyPost addPost={props.addPost} post={props.post} />
            </div>
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        post: state.profilePage.post
    }
}

export default connect(mapStateToProps, { addPost })(Profile);