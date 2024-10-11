import React, { useState } from 'react';
import './NewBlog.css'; // Assuming you will add styles similar to your design

function NewBlog({ onSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    short_description: '',
    description: '',
    overlay_text: '',
    img: null,
  });

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    try {
      const response = await fetch('http://127.0.0.1:4343/api/v1/posts', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        setFormData({
          title: '',
          short_description: '',
          description: '',
          overlay_text: '',
          img: null,
        });
        onSuccess('upload');
      } else {
        const errorData = await response.json();
        console.error('Error creating post:', errorData.message);
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className='new-blog-container'>
      <div className='breadcrumbs'>
        <span>🏠</span>
        <span>Posts</span>
        <span>New Post</span>
      </div>
      <div className=''>
        <form className='new-blog-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Title</label>
            <input
              type='text'
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder='Enter post title'
            />
          </div>

          <div className='form-group'>
            <label>Short Description</label>
            <input
              type='text'
              value={formData.short_description}
              onChange={(e) =>
                setFormData({ ...formData, short_description: e.target.value })
              }
              placeholder='Enter short description'
            />
          </div>

          <div className='form-group'>
            <label>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder='Enter full description'></textarea>
          </div>

          <div className='form-group'>
            <label>Overlay Text</label>
            <input
              type='text'
              value={formData.overlay_text}
              onChange={(e) =>
                setFormData({ ...formData, overlay_text: e.target.value })
              }
              placeholder='Enter overlay text'
            />
          </div>

          <div className='form-group'>
            <label>Image</label>
            <input
              type='file'
              onChange={(e) =>
                setFormData({ ...formData, img: e.target.files[0] })
              }
            />
          </div>

          <button type='submit' className='submit-button'>
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewBlog;
