interface NavItem {
  title: string;
  route: string;
}

export const navItems: NavItem[] = [
  {
    title: 'home',
    route: '/',
  },
  {
    title: 'news',
    route: '/news',
  },
];

export const protectedItem: NavItem = {
  title: 'profile',
  route: '/profile',
};
