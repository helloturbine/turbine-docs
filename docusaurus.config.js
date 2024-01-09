// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Turbine Docs',
  tagline: 'Documentation for the Turbine app',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.helloturbine.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'helloturbine', // Usually your GitHub org/user name.
  projectName: 'turbine-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/' // Serve the docs at the site's root
        },
        blog: {
          showReadingTime: true,
          routeBasePath: 'changelog',
          path: 'changelog'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'My Site',
        logo: {
          alt: 'Turbine Logo',
          src: 'img/turbine.svg',
          srcDark: 'img/turbine_dark.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'what-is-turbine',
            position: 'left',
            label: 'What is Turbine?',
          },
          {to: 'changelog', label: 'Changelog', position: 'left'},
          {
            href: 'https://www.helloturbine.com/',
            label: 'Turbine',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'What is Turbine?',
                to: '/',
              },
              {
                label: 'Integrations',
                to: '/integrations',
              },
              {
                label: 'Records',
                to: '/category/records',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/helloturbine',
              },
              {
                label: 'Substack',
                href: 'https://helloturbine.substack.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Changelog',
                to: '/changelog',
              },
              {
                label: 'Turbine',
                href: 'https://www.helloturbine.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BurkERP, Inc. dba Turbine. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'NM8V31QFR5',
  
        // Public API key: it is safe to commit it
        apiKey: '47dfe9068e92b10e836f3c74b81a42f1',
  
        indexName: 'helloturbine',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
};

module.exports = config;
