import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, authUrl = '/auth' }) {
  const isAuthenticated = Boolean(localStorage.getItem('isAuthenticated'))
  if (isAuthenticated) {
    return children;
  }
  return <Navigate to={authUrl} />
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  authUrl: PropTypes.string,
};
  
export default PrivateRoute 
