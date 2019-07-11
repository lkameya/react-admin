import {
  Dashboard,
  Assignment
} from '@material-ui/icons';
import HomePage from 'containers/HomePage';
import UserPage from 'containers/UserPage';

const Routes = [
  {
    name: 'Dashboard',
    icon: Dashboard,
    path: '/home',
    component: HomePage,
  },
  {
    name: 'Basic CRUD',
    icon: Assignment,
    path: '/users',
    component: UserPage,
  },
];

export default Routes;
