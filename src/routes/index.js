import {
  Dashboard
} from '@material-ui/icons';
import HomePage from 'pages/HomePage';

const Routes = [
  {
    name: 'Dashboard',
    icon: Dashboard,
    path: '/home',
    component: HomePage,
  },
];

export default Routes;
