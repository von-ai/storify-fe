import { Home, Package, Settings, Users } from 'lucide-react';

export const sidebarItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: Home,
  },
  {
    title: 'Storage',
    url: '/storage',
    icon: Package,
  },
  {
    title: 'Profile',
    url: '#',
    icon: Users,
  },
  {
    title: 'Setting',
    url: '#',
    icon: Settings,
  },
];
