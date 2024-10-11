import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AuthLayout from './layouts/AuthLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import UserList from './pages/Users/UserList';
import Settings from './pages/Settings/Settings';
import Login from './pages/Auth/Login';

import PrivateRoute from './components/PrivateRoute';
import Blogs from './pages/Blogs/Blog';
import NewBlog from './pages/Blogs/NewBlog';
import Archive from './pages/Archives/Archive';
import NewArchive from './pages/Archives/NewArchive';
function App() {
  return (
    <Router>
      <Routes>
        {/* Public route for Login */}
        <Route
          path='/login'
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />

        {/* Protected Admin Routes */}
        <Route
          path='/admin/*'
          element={
            <PrivateRoute>
              <AdminLayout>
                <Routes>
                  {/* Nested Routes for Admin Dashboard */}
                  <Route path='dashboard' element={<Dashboard />} />
                  <Route path='users' element={<UserList />} />
                  <Route path='settings' element={<Settings />} />
                  <Route path='blogs' element={<Blogs />} />
                  <Route path='newblog' element={<NewBlog />} />
                  <Route path='archives' element={<Archive />} />
                  <Route path='newarchives' element={<NewArchive />} />
                </Routes>
              </AdminLayout>
            </PrivateRoute>
          }
        />

        {/* Default Redirect */}
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </Router>
  );
}

export default App;
