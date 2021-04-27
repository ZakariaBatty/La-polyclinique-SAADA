import Index from '../views/Index';
import Profile from '../views/pages/Profile';
import Doctors from '../views/pages/Doctors';
import Patients from '../views/pages/Patients';

var routes = [
  {
    path: '/index',
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: Index,
    layout: '/dashboard',
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: 'ni ni-single-02 text-yellow',
    component: Profile,
    layout: '/dasboard',
  },
  {
    path: '/patients',
    name: 'Patients',
    icon: 'ni ni-bullet-list-67 text-red',
    component: Patients,
    layout: '/dashboard',
  },
  {
    path: '/doctors',
    name: 'Doctors',
    icon: 'ni ni-bullet-list-67 text-red',
    component: Doctors,
    layout: '/dashboard',
  },
];
export default routes;
