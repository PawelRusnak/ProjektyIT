import * as Axios from 'axios';
import * as MockAdapter from 'axios-mock-adapter';
import Config from 'Config';

const axiosInstance = Axios.default.create({
  baseURL: Config.apiDefaultURL,
  timeout: Config.apiTimeout
});

class ApiClientBase {
  get = (url, params) => axiosInstance.get(url, {
    params
  });

  post = (url, data) => {
    return axiosInstance
      .post(url, data);
  };

  put = (url, data) => {
    return axiosInstance
      .put(url, data);
  };

  delete = (url, data) => {
    return axiosInstance
      .delete(url, {
        data: data
      });
  };
}

export default ApiClientBase;
