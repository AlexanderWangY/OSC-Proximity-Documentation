const documentation = [
    { 
        text: 'Introduction',
        collapsible: true,
        items: [
            { text: 'Getting Started', link: '/guide/getting-started'},
            { text: 'Optional Tools', link: '/guide/optional-tools'},
            { text: 'Minimum Viaable Product', link: '/guide/mvp'},
        ]
    },
    // {
    //     text: 'Frontend Documentation',
    //     collapsible: true,
    //     items: [
    //     ]
    // },
    {
        text: 'Backend',
        collapsible: true,
        items: [
            { text: 'Introduction', link: '/guide/backend-introduction.md'},
            { text: 'Routes', link: '/guide/backend-routes.md'},
            { text: 'Websockets', link: '/guide/backend-websockets.md'}
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
    }
}
