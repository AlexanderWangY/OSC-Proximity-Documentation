import markdownItCheckbox from "markdown-it-checkbox";

const documentation = [
    { 
        text: 'Introduction',
        collapsible: true,
        items: [
            { text: 'Getting Started', link: '/guide/getting-started'},
            { text: 'Contributing', link: '/guide/contributing'},
            { text: 'Optional Tools', link: '/guide/optional-tools'},
            { text: 'Minimum Viable Product', link: '/guide/mvp'},
        ]
    },
    {
        text: 'Frontend Documentation',
        collapsible: true,
        items: [
            { text: 'React Native Page Tutorial', link: '/guide/frontend/frontend-tutorial.md'},
            { text: 'Frontend Style Guide', link: '/guide/frontend/frontend-style-guide.md'},
            { text: 'Router Paths', link: '/guide/frontend/frontend-routing.md'},
            { text: 'Services', link: '/guide/frontend/frontend-services.md'},
        ]
    },
    {
        text: 'Backend',
        collapsible: true,
        items: [
            { text: 'Introduction', link: '/guide/backend/backend-introduction.md'},
            { text: 'REST API', link: '/guide/backend/backend-restapi.md'},
            { text: 'Websocket API', link: '/guide/backend/backend-websockets.md'},
            { text: 'Firestore Collections & Types', link: '/guide/backend/backend-types.md'}
        ]
    },
    {
      text: 'Miscellaneous',
      collapsible: true,
      items: [
          { text: 'FAQ', link: '/guide/misc/faq.md'},
          { text: 'Troubleshooting', link: '/guide/misc/troubleshooting.md'},
      ]
  }
];

export default {
  title: "Echologator",
  logo: "/imgs/cat.jpeg",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Contacts", link: "contact" },
    ],
    sidebar: {
      "/guide/": documentation,
    },
  },
  ignoreDeadLinks: true,
  markdown: {
    config: (md) => md.use(markdownItCheckbox),
  },
};
