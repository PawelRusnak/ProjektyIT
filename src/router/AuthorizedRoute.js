import React from 'react';
import { Route } from 'react-router-dom';


const AuthorizedRoute = ({ permission, permissions, ...props }) => {
  if (permission) {
  }

 

  return (
    <Route
      {...props}
    />
  );
};

export default AuthorizedRoute;
