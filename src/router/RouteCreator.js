const removeDoubleSlash = path => {
  return path.replace(/\/+/g, '/');
};

class RouteInfo {
  constructor(config) {
    this._path = config.path;
    this._parentRoute = config.parentRoute || null;
    this._params = config.params || null;
  }

  getFullPath = params => {
    let fullPath = '';

    if (this._parentRoute) fullPath += this._parentRoute.getFullPath(params);
    fullPath += '/';
    fullPath += this._path;

    const fullParams = {
      ...this._params,
    };

    for (const key in params) {
      if (fullParams[key]) fullParams[key] = params[key];
    }

    const paramsValues = Object.values(fullParams);

    if (paramsValues.length) {
      fullPath = `${fullPath}/${paramsValues.join('/')}`;
    }

    return removeDoubleSlash(fullPath);
  };

  getUrl = params => {
    const projectName = window.location.pathname.split('/')[1];

    return this.getFullPath(params).replace(':projectName', projectName);
  };
}

export default RouteInfo;
