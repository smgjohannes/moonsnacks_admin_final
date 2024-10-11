import React, { useState, useEffect } from 'react';
import './Blog.css'; // Assuming you'll create a CSS file for styling
import { Link } from 'react-router-dom';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  // Fetch existing blog posts
  useEffect(() => {
    fetchBlogs().then((data) => setBlogs(data));
  }, []);

  // Function to fetch blog posts
  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://127.0.0.1:4343/api/v1/posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  return (
    <div className='blog-container'>
      {/* Blog header */}
      <div className='blog-header'>
        <div className='breadcrumbs'>
          <span>🏠</span> {/* Home icon */}
          <span>Blogs</span>
        </div>
        <Link to='/admin/newblog'>
          <button className='new-blog-button'>+ New Blog</button>
        </Link>
      </div>

      {/* Blog Cards */}
      <div className='blog-cards'>
        {blogs.length > 0 ? (
          blogs.map((post) => (
            <div key={post.id} className='blog-card'>
              <h3>{post.title}</h3>
              <p>{post.shortDescription}</p>
              <div className='read-icon'>
                <span>▶</span> {/* Play icon */}
              </div>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
}

export default Blog;
