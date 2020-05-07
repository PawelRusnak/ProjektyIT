import RouteCreator from './RouteCreator';

// ROOT
export const Root = new RouteCreator({
  path: '',
});

export const Project = new RouteCreator({
  path: '',
  params: {
    projectName: ':projectName'
  }
});

// ACCOUNT

export const Login = new RouteCreator({
  path: 'login',
  parentRoute: Root
});


export const Dashboard = new RouteCreator({
  path: 'dashboard',
  parentRoute: Root
});

export const Dashboard2 = new RouteCreator({
  path: 'dashboard2',
  parentRoute: Root
});

export const Backlog = new RouteCreator({
  path: 'backlog',
  parentRoute: Project
});

export const Board = new RouteCreator({
  path: 'board',
  parentRoute: Project
});

