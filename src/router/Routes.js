import RouteCreator from './RouteCreator';

export const Root = new RouteCreator({
  path: '',
});

export const Project = new RouteCreator({
  path: '',
  params: {
    projectName: ':projectName'
  }
});

export const Login = new RouteCreator({
  path: 'login',
  parentRoute: Root
});

export const Dashboard = new RouteCreator({
  path: 'dashboard',
  parentRoute: Root
});

export const Structure = new RouteCreator({
  path: 'structure',
  parentRoute: Root
});

export const Timesheet = new RouteCreator({
  path: 'timesheet',
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

export const Raports = new RouteCreator({
  path: 'raports',
  parentRoute: Project
});

export const Task = new RouteCreator({
  path: 'task',
  params: {
    projectName: ':taskId'
  }
});

export const User = new RouteCreator({
  path: 'user',
  params: {
    projectName: ':userId'
  }
});

export const Team = new RouteCreator({
  path: 'team',
  params: {
    projectName: ':teamId'
  }
});