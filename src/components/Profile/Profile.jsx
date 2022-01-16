import React from 'react';
import MyPostsContainer from './MyPost/MyPostsContainer';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
};



export default Profile;