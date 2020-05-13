import * as Axios from 'axios';
import * as MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(Axios)

mock.onGet("/tasks").reply(200, {
  tasks: [{ id: 1, name: "John Smith" }],
});
mock.onGet("/projects").reply(200, {
  projects: [
    { name: "Project ALFA", url: "/project-alfa/", shortName: "PA" },
    { name: "Project BETA", url: "/project-beta/", shortName: "PB" }
  ],
});
mock.onGet("/timesheet/detailed").reply(200, {
  details: [{ task: 'PA-1', time: 4 }, { task: 'PA-2', time: 3 }, { task: 'Zebranie zespołu', time: 1, span: "10:30-11:30" }]
});
mock.onGet("/auth/permission").reply(200, {
  result: true
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
