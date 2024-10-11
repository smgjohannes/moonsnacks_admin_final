import React, { useState } from 'react';
import './NewArchive.css';

function NewArchive({ onSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: '',
    start_date: '',
    end_date: '',
    img: null,
  });

  // Handle form data change for all input fields
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    try {
      const response = await fetch('http://127.0.0.1:4343/api/v1/archives', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        setFormData({
          title: '',
          location: '',
          description: '',
          start_date: '',
          end_date: '',
          img: null,
        });
        onSuccess('upload');
      } else {
        const errorData = await response.json();
        console.error('Error creating archive:', errorData.message);
      }
    } catch (error) {
      console.error('Error creating archive:', error);
    }
  };

  return (
    <div className='new-archive-container'>
      <div className='breadcrumbs'>
        <span>🏠</span>
        <span>Archives</span>
        <span>New Archive</span>
      </div>
      <div className=''>
        <form className='new-blog-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Title</label>
            <input
              type='text'
              name='title'
              value={formData.title}
              onChange={handleChange}
              placeholder='Enter archive title'
            />
          </div>

          <div className='form-group'>
            <label>Location</label>
            <input
              type='text'
              name='location'
              value={formData.location}
              onChange={handleChange}
              placeholder='Enter archive location'
            />
          </div>

          <div className='form-group'>
            <label>Description</label>
            <textarea
              name='description'
              value={formData.description}
              onChange={handleChange}
              placeholder='Enter full description'></textarea>
          </div>

          <div className='form-group'>
            <label>Start Date</label>
            <input
              type='date'
              name='start_date'
              value={formData.start_date}
              onChange={handleChange}
              placeholder='Enter start date'
            />
          </div>

          <div className='form-group'>
            <label>End Date</label>
            <input
              type='date'
              name='end_date'
              value={formData.end_date}
              onChange={handleChange}
              placeholder='Enter end date'
            />
          </div>

          <div className='form-group'>
            <label>Image</label>
            <input type='file' name='img' onChange={handleChange} />
          </div>

          <button type='submit' className='submit-button'>
            Create Archive
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewArchive;
