import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import SpaceByOwner from "pages/dashboard/spacesByOwner"
import Notification from "pages/dashboard/notification"
import Users from "pages/dashboard/users"
import Spaces from "pages/dashboard/spaces"
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));


const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
  
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        },
        {
          path: 'spaceByOwner',
          element: <SpaceByOwner />
        },
        {
          path: 'notification',
          element: <Notification />
        },
        {
          path: 'users',
          element: <Users />
        },
        {
          path: 'spaces',
          element: <Spaces />
        },

        

        
      ]
    },
   

   
  ]
};

export default MainRoutes;
