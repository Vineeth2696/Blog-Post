import React, { useState } from 'react';
import PostDetail from './PostDetail';
import { deletePost } from '../services/postService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Post = ({ post, onDelete }) => {
    const [showDetail, setShowDetail] = useState(false);

    const handleDelete = async () => {
        try {
            await deletePost(post.id);
            onDelete(post.id);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="post">
            <div className="post-header">
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body.substring(0, 100)}...</p>
                </div>
                <FontAwesomeIcon
                    icon={faTrash}
                    className="delete-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleDelete();
                    }}
                />
            </div>
            {showDetail && <PostDetail post={post} />}
        </div>
    );
};

export default Post;
