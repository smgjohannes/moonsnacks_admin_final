import React from 'react';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar'; // Include Sidebar

const AdminLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar /> {/* Sidebar should stay on the left */}
      <div className='main-content' style={{ flex: 1, padding: '20px' }}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
