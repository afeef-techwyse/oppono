const wpSiteUrl = 'https://codesign82.com/oppono';
const frontEndSiteUrl = 'https://oppono.vercel.app';
// const frontEndSiteUrl = 'http://localhost:3000/';

const settings = {
  'name': 'oppono-frontity',
  'state': {
    'frontity': {
      'url': frontEndSiteUrl,
      'title': 'Oppono',
      'description': '',
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
          'api': `${wpSiteUrl}/wp-json`,
        },
      },
    },
    '@frontity/tiny-router',
    '@frontity/html2react',
    '@frontity/head-tags',
  ],
};

export default settings;
