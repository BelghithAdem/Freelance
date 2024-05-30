// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

const dashboard = {
  id: 'group-dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'users',
      title: 'Users',
      type: 'item',
      url: '/dashboard/users',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'spaces',
      title: 'Spaces',
      type: 'item',
      url: '/dashboard/spaces',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
    
  ]
};

export default dashboard;
