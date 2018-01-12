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
    name: 'Create Snippets',
    url: '/components',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'SQL Snippet',
        url: '/components/sqlsnippet',
        icon: 'icon-puzzle'
      }
      ]
  }
];
