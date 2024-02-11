import markdownItCheckbox from 'markdown-it-checkbox';

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
            { text: 'Walkthrough of A React Native Page', link: '/guide/frontend-tutorial.md'},
            { text: 'Frontend Style Guide', link: '/guide/frontend-style-guide.md'},
            { text: 'Router Paths', link: '/guide/frontend-routing.md'},
            { text: 'Services', link: '/guide/frontend-services.md'},
        ]
    },
    {
        text: 'Backend',
        collapsible: true,
        items: [
            { text: 'Introduction', link: '/guide/backend-introduction.md'},
            { text: 'REST API', link: '/guide/backend-restapi.md'},
            { text: 'Websocket API', link: '/guide/backend-websockets.md'},
            { text: 'Firestore Collections & Types', link: '/guide/backend-types.md'}
        ]
    }
];

export default {
    title: 'Echologator',
    logo: '/imgs/cat.jpeg',
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide/getting-started'},
            { text: 'Contacts', link: 'contact'}
        ],
        sidebar: {
            '/guide/': documentation,
        }
    },
    ignoreDeadLinks: true,
    markdown: {
        config: (md) => md.use(markdownItCheckbox)
    }
}
