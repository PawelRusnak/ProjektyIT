import ApiClientBase from './ApiClientBase';

export default class GeneralApiClient extends ApiClientBase {
  getProjects = () => this.get('/projects');
  getDayDetails = () => this.get('/timesheet/detailed');
  checkPermissions = () => this.get('/auth/permissions')
};

