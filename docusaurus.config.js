// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cube Petit DIY',
  tagline: '小さな体で、走って、聞いて、話して、表情を出す。',
  favicon: 'img/favicon.png',

  url: 'https://sbgisen.github.io',
  baseUrl: '/cube_petit_diy/',

  organizationName: 'sbgisen',
  projectName: 'cube_petit_diy',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    localeConfigs: {
      ja: { label: '日本語', direction: 'ltr', htmlLang: 'ja' },
      en: { label: 'English', direction: 'ltr', htmlLang: 'en' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/sbgisen/cube_petit_diy/edit/develop/',
        },
        blog: false,
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
        title: 'Cube Petit DIY',
        logo: {
          alt: 'Cube Petit Logo',
          src: 'img/favicon.png',
        },
        items: [
          {
            to: '/',
            label: 'Overview',
            position: 'left',
            activeBaseRegex: '^(/[a-z]{2})?(/versions|/)$',
          },
          {
            to: '/bom/',
            label: 'BOM',
            position: 'left',
            activeBaseRegex: '^(/[a-z]{2})?/bom',
          },
          {
            to: '/assembly/',
            label: 'Assembly',
            position: 'left',
            activeBaseRegex: '^(/[a-z]{2})?/assembly',
          },
          {
            to: '/wiring/',
            label: 'Wiring',
            position: 'left',
            activeBaseRegex: '^(/[a-z]{2})?/wiring',
          },
          {
            to: '/software/',
            label: 'Software Setup',
            position: 'left',
            activeBaseRegex: '^(/[a-z]{2})?/software',
          },
          {
            type: 'dropdown',
            label: 'v3',
            position: 'right',
            items: [
              { label: 'v3 (latest)', to: '/' },
              { type: 'html', value: '<span style="padding:4px 12px;color:#aaa;font-size:0.9em">v2 (準備中)</span>' },
              { type: 'html', value: '<span style="padding:4px 12px;color:#aaa;font-size:0.9em">v1 (準備中)</span>' },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/sbgisen/cube_petit_diy',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '関連リンク',
            items: [
              { label: 'Cube Petit Portal', href: 'https://sbgisen.github.io/cube_petit_portal/' },
              { label: 'cube_petit_ros', href: 'https://github.com/sbgisen/cube_petit_ros' },
              { label: 'cube_petit_cad', href: 'https://github.com/sbgisen/cube_petit_cad' },
            ],
          },
          {
            title: 'コミュニティ',
            items: [
              { label: 'GitHub', href: 'https://github.com/sbgisen/cube_petit_diy' },
              { label: 'X', href: 'https://x.com/Cube_petit_2022' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Cube Petit. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'yaml'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
