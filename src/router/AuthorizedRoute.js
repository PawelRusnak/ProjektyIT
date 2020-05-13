import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Login } from './Routes';
import UserApiClient from '../api/GeneralApiClient';

const UserAPI = new UserApiClient();

const AuthorizedRoute = ({ permission, permissions, ...props }) => {
  const [permissionGranted, setPermissionGranted] = useState(false);

  if (permission) {
    UserAPI.checkPermissions(permission).then(response => {
      if (response.data.result === true) {
        setPermissionGranted(true);
      }
    });
  };

  if (permissionGranted) {
    return (
      <Redirect to={Login.getUrl()} />
    )
  };

  return (
    <Route {...props} />
  );
};

export default AuthorizedRoute;
