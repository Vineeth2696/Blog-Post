import React, { useState } from 'react';

const CreatePost = ({ onCreatePost }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreatePost(title, body);
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create a New Post</h2>
            <label htmlFor="title">Title</label>
            <input
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="body">Body</label>
            <textarea
                id="body"
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreatePost;
