import React from 'react';
import { Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const ProtectedRoute = ({ redirectPath = '/Login', children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000; // Get current time in seconds
  if (decodedToken.exp < currentTime) {
    localStorage.clear();
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
