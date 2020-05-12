import * as Axios from 'axios';
import * as MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(Axios)

mock.onGet("/tasks").reply(200, {
  users: [{ id: 1, name: "John Smith" }],
});
mock.onGet("/projects").reply(200, {
  projects: [{ name: "Project ALFA", url: "/project-alfa/", shortName: "PA" },
  { name: "Project BETA", url: "/project-beta/", shortName: "PB" }],
});

class ApiClientBase {
  get = (url, params) => {
    return Axios
      .get(url, { params });
  }

  post = (url, data) => {
    return Axios
      .post(url, data);
  };

  put = (url, data) => {
    return Axios
      .put(url, data);
  };

  delete = (url, data) => {
    return Axios
      .delete(url, {
        data: data
      });
  };
}

export default ApiClientBase;
