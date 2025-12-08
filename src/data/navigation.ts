export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
}

export const navigationItems: NavigationItem[] = [
  {
    label: 'Works',
    href: '/works/',
  },
  {
    label: 'Tags',
    href: '/tags/',
  },
];

export const getNavigationItems = (base: string = ''): NavigationItem[] => {
  return navigationItems.map(item => ({
    ...item,
    href: item.external ? item.href : `${base}${item.href.startsWith('/') ? item.href.slice(1) : item.href}`,
  }));
};