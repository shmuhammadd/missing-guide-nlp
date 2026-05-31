// @ts-check

/**
 * Sidebar for The Missing NLP Paper Guide.
 *
 * Docusaurus strips numeric prefixes (e.g. "01-") from document IDs by default,
 * so the chapter at chapters/01-framing.md has the doc ID "chapters/framing".
 * That's also how the URL paths come out — clean and stable.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  guide: [
    'index',
    {
      type: 'category',
      label: 'Chapters',
      collapsed: false,
      link: { type: 'doc', id: 'chapters/README' },
      items: [
        'chapters/publication-landscape',
        'chapters/framing',
        'chapters/title',
        'chapters/abstract',
        'chapters/introduction',
        'chapters/related-work',
        'chapters/background',
        'chapters/dataset-construction',
        'chapters/methods',
        'chapters/experimental-setup',
        'chapters/results',
        'chapters/analysis',
        'chapters/conclusion',
        'chapters/limitations',
        'chapters/ethics',
        'chapters/references-and-appendices',
        'chapters/best-papers',
        'chapters/checklist',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: true,
      items: [
        'checklists/submission-checklist',
        'examples/README',
      ],
    },
  ],
};

export default sidebars;
