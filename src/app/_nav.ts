export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Components',
    url: '/components',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Buttons',
        url: '/components/buttons',
        icon: 'icon-puzzle'
      }
      ]
  }
];
