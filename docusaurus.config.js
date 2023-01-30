// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'A Data & Analytics Wiki',
  tagline: 'Data & Analytics',
  url: 'https://www.github.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jon-cajacob', // Usually your GitHub org/user name.
  projectName: 'data-and-analytics',
  deploymentBranch: "gh-pages",
  trailingSlash: false,

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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/jon-cajacob/jon-cajacob.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All articles',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'A Data & Analytics Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Wiki',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},

          {
            type: 'dropdown',
            label: 'Blog',
            position: 'left',
            to: '/blog',
            items: [
              {
                label: 'Overview',
                to: '/blog',
              },
              {
                label: 'All Tags',
                to: '/blog/tags',
              },
              {
                label: '1 | Project Management',
                to: '/blog/tags/project-management',
              },
              {
                label: '2 | Solution Design',
                to: '/blog/tags/solution-design',
              },
              {
                label: '3 | Data Transformation (ETL)',
                to: '/blog/tags/data-transformation',
              },
              {
                label: '4 | Data Model',
                to: '/blog/tags/data-model',
              },
              {
                label: '5 | Data Visualization & Reporting',
                to: '/blog/tags/data-visualization-reporting',
              },
              {
                label: '6 | Publishing & Sharing',
                to: '/blog/tags/publishing-sharing',
              },

              // ... more items
            ],
          },

          {
            href: 'https://www.linkedin.com/in/jon-cajacob-cfa-frm-4876857b/',
            label: 'LinkedIn',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: 'Business Intelligence & Analytics with Microsoft Power BI (Book work-in-progress)',
                to: '/category/business-intelligence--analytics-with-microsoft-power-bi-book-in-progress',
              },
              //{
              //  label: 'Blog',
              //  to: '/blog',
              //},
            ],
          },
          {
            title: 'Blog',
            items: [
              {
                label: '1 | Project Management',
                to: '/blog/tags/project-management',
              },
              {
                label: '2 | Solution Design',
                to: '/blog/tags/solution-design',
              },
              {
                label: '3 | Data Transformation',
                to: '/blog/tags/data-transformation',
              },
              {
                label: '4 | Data Model',
                to: '/blog/tags/data-model',
              },
              {
                label: '5 | Data Visualization & Reporting',
                to: '/blog/tags/data-visualization-reporting',
              },
              {
                label: '6 | Publishing & Sharing',
                to: '/blog/tags/data-visualization-reporting',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/jon-cajacob-cfa-frm-4876857b/',
              },
              {
                label: 'DataVision AG',
                href: 'https://www.datavision.ch/',
              },
              {
                label: 'Imprint',
                href: '/imprint',
              },
              {
                label: 'Data Privacy',
                href: '/data-privacy',
              },
            ],
          },
//          {
//            title: 'More',
//            items: [
//              {
//                label: 'Blog',
//                to: '/blog',
//              },
//              {
//                label: 'GitHub',
//                href: 'https://github.com/facebook/docusaurus',
//              },
//            ],
//          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} A Data & Analytics Wiki by Jon Cajacob, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

module.exports = config;
