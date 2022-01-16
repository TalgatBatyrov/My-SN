import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-F5GQg8qB2fWquF1ltQvAT2Z8Dv5pJLb9w&usqp=CAU" alt="#" />
            {props.message}
            <div>
                Likes: {props.likesCount}
            </div>
        </div>
    );
};

export default Post;