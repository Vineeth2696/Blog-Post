import React, { useState, useEffect } from 'react';
import { fetchPosts, createPost, deletePost } from './services/postService';
import Header from './components/Header';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import Search from './components/Search';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    const handleCreatePost = async (title, body) => {
        try {
            const newPost = await createPost(title, body);
            setPosts([newPost, ...posts]);
            setMessage('Post created successfully!');
        } catch (err) {
            setError(err.message);
        } finally {
            setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
        }
    };

    const handleDeletePost = async (id) => {
        try {
            await deletePost(id);
            setPosts(posts.filter(post => post.id !== id));
            setMessage('Post deleted successfully!');
        } catch (err) {
            setError(err.message);
        } finally {
            setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
        }
    };

    const handleSearch = (term) => {
        setSearchTerm(term.toLowerCase());
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm)
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="App">
            <Header />
            {message && <div className="message">{message}</div>}
            <Search onSearch={handleSearch} />
            <CreatePost onCreatePost={handleCreatePost} />
            <PostList posts={filteredPosts} onDelete={handleDeletePost} />
        </div>
    );
};

export default App;
