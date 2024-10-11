import React, { useState, useEffect } from 'react';
import './Archive.css'; // Assuming you'll create a CSS file for styling
import { Link } from 'react-router-dom';

function Archive() {
  const [archives, setArchives] = useState([]);

  // Fetch existing archive posts
  useEffect(() => {
    fetchArchives().then((data) => setArchives(data));
  }, []);

  // Function to fetch Archive posts
  const fetchArchives = async () => {
    try {
      const response = await fetch('http://127.0.0.1:4343/api/v1/archives');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching archives:', error);
    }
  };

  return (
    <div className='archive-container'>
      {/* Archives header */}
      <div className='archive-header'>
        <div className='breadcrumbs'>
          <span>🏠</span> {/* Home icon */}
          <span>Archives</span>
        </div>
        <Link to='/admin/newarchives'>
          <button className='new-archive-button'>+ New Archives</button>
        </Link>
      </div>

      {/* Archives Cards */}
      <div className='archive-cards'>
        {archives.length > 0 ? (
          archives.map((archive) => (
            <div key={archive.id} className='archive-card'>
              <h3>{archive.title}</h3>
              <p>{archive.location}</p>
              <p>{archive.start_date}</p>
              <p>{archive.end_date}</p>
              <p>{archive.description}</p>
              <div className='read-icon'>
                <span>▶</span>
              </div>
            </div>
          ))
        ) : (
          <p>No archives available</p>
        )}
      </div>
    </div>
  );
}

export default Archive;
