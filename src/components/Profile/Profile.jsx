import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../profileReducer';
import MyPosts from './MyPost/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo />
            <MyPosts addPost={props.addPost} post={props.post} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        post: state.profilePage.post
    }
}

export default connect(mapStateToProps, { addPost })(Profile);