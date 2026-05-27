// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`). There are various equivalent ways to declare
// your Docusaurus config. See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Missing NLP Paper Guide',
  tagline: 'The class nobody teaches you about writing your first *ACL paper — ACL, EMNLP, and NAACL.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://shmuhammadd.github.io',
  // For GitHub Pages deployment, it is often '/<projectName>/'
  baseUrl: '/missing-guide-nlp/',

  // GitHub pages deployment config.
  organizationName: 'shmuhammadd', // Usually your GH org/user name.
  projectName: 'missing-guide-nlp',  // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',           // promote to 'throw' once stable
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    // To add a translation, add a locale here and create the matching
    // i18n/<locale>/docusaurus-plugin-content-docs/current/ directory.
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Make docs the root of the site (no /docs/ prefix in URLs)
          routeBasePath: '/',
          editUrl: 'https://github.com/shmuhammadd/missing-guide-nlp/tree/main/',
          showLastUpdateTime: true,
        },
        blog: false,  // we don't need a blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'The Missing NLP Paper Guide',
        logo: {
          alt: 'The Missing NLP Paper Guide logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guide',
            position: 'left',
            label: 'Chapters',
          },
          {
            to: '/checklists/submission-checklist',
            label: 'Checklist',
            position: 'left',
          },
          {
            to: '/examples/',
            label: 'Examples',
            position: 'left',
          },
          {
            href: 'https://github.com/shmuhammadd/missing-guide-nlp',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Guide',
            items: [
              { label: 'Start at Chapter 1', to: '/chapters/framing' },
              { label: 'Submission Checklist', to: '/checklists/submission-checklist' },
              { label: 'Best Papers', to: '/chapters/best-papers' },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Contributing',
                href: 'https://github.com/shmuhammadd/missing-guide-nlp/blob/main/CONTRIBUTING.md',
              },
              {
                label: 'Style Guide',
                href: 'https://github.com/shmuhammadd/missing-guide-nlp/blob/main/STYLE.md',
              },
              {
                label: 'Issues',
                href: 'https://github.com/shmuhammadd/missing-guide-nlp/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/shmuhammadd/missing-guide-nlp',
              },
              {
                label: 'ACL Anthology',
                href: 'https://aclanthology.org',
              },
              {
                label: 'ACL Rolling Review',
                href: 'https://aclrollingreview.org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Missing NLP Paper Guide Contributors. CC BY 4.0. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['yaml', 'bash'],
      },
      // Algolia search can be added later — leaving the local search default
      // until you have something to index that's worth paying for.
    }),
};

export default config;
