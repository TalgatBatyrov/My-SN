import React, { useState } from 'react';
import Post from './Post/Post';

const MyPost = (props) => {

    const [post, setPost] = useState('');

    const addPost = () => {
        props.addPost(post);
        setPost('');
    }

    const postElements = props.post.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    return (
        <div>
            <div>
                My Posts
            </div>
            <div>
                <input type="text" value={post} onChange={e => setPost(e.currentTarget.value)} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            {postElements}
        </div>
    );
};

export default MyPost;