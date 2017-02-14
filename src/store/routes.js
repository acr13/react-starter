import About from '../containers/about/';
import Users from '../containers/users/';
import Sagas from '../containers/sagas/';

export const ROUTES = [{
  component: About,
  name: 'About',
  url: '/about',
}, {
  component: Users,
  name: 'Users',
  url: '/users'
}, {
  component: Sagas,
  name: 'Sagas',
  url: '/sagas',
}];
