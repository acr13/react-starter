import About from '../containers/about/';
import Users from '../containers/users/';

export const ROUTES = [{
  component: About,
  name: 'About',
  url: '/about',
}, {
  component: Users,
  name: 'Users',
  url: '/users'
}];
