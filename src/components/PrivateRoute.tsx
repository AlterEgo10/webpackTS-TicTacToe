import React from 'react'
import { Navigate } from 'react-router-dom';

interface PrivateRouteProperties {
  children: React.ReactElement,
  authUrl?: string
}

function PrivateRoute({ children, authUrl = '/auth' }:PrivateRouteProperties) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (isAuthenticated) {
    return children;
  }
  return <Navigate to={authUrl} />
}

// PrivateRoute.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
//   authUrl: PropTypes.string,
// };
  
export default PrivateRoute 
