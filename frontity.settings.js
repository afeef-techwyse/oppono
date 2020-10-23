const siteUrl = 'https://codesign82.com/oppons';

const settings = {
  'name': 'oppono-frontity',
  'state': {
    'frontity': {
      'url': 'https://oppono.vercel.app/',
      'title': 'Test Frontity Blog',
      'description': 'WordPress installation for Frontity development',
    },
  },
  'packages': [
    {
      'name': 'oppono-theme',
      'state': {
        'theme': {},
      },
    },
    {
      'name': '@frontity/wp-source',
      'state': {
        'source': {
          'api': `${siteUrl}/wp-json`,
        },
      },
    },
    '@frontity/tiny-router',
    '@frontity/html2react',
    '@frontity/head-tags',
  ],
};

export default settings;
