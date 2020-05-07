import ApiClientBase from './ApiClientBase';

export default class ConfigurationStoreClient extends ApiClientBase {
  getTasks = () => this.get('/tasks');
};
