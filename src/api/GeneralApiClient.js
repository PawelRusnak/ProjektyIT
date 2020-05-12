import ApiClientBase from './ApiClientBase';

export default class GeneralApiClient extends ApiClientBase {
  getProjects = () => this.get('/projects');
};

